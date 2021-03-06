import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {movieDetail} from '../share/movie-detail'
import {MoviesDataService} from '../service/movies-data.service';
import {InMemoryDataService} from '../service/in-memory-data.service';
import {MovieEmotion} from '../share/movieEmotion';
import { faSmile, faSadCry, faKissWinkHeart, faFlushed, faGrinAlt, faGrinStars } from '@fortawesome/free-solid-svg-icons';
import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  animations:[
    trigger('imageState', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0) scale(1)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(0) scale(0.8)'}
        ),
        animate(200)
      ]),
  ]),

  trigger('titleState', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(100px)'}
      ),
      animate(300)
    ]),
]),

  trigger('textState', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(100px)'}
      ),
      animate(600)
    ]),
])
]
})
export class MovieDetailComponent implements OnInit {

  remove = false;

  isFetching = false;
  movie:movieDetail;
  providedId: number;
  public addEmotions:MovieEmotion;
  mEmotions:MovieEmotion[];
  thisMEmotion:MovieEmotion;

  //Import icons
  happyIcon = faSmile;
  sadIcon = faSadCry;
  loveIcon = faKissWinkHeart;
  fearIcon = faFlushed;
  optimisticIcon = faGrinAlt;
  amazedIcon = faGrinStars;


  constructor(private route:ActivatedRoute, private service:MoviesDataService, private inMemoryService:InMemoryDataService) {}


  ngOnInit(){

  this.getMovieDetail();

  }


  getMovieDetail(){
    this.route.params
  .subscribe(
    (params:Params)=>{
      this.providedId = params['id'];
      this.isFetching = true;

      this.service.fetchMovieDetail(this.providedId).subscribe(data=>{
        this.isFetching = false;
       this.movie =data;
      });

  this.mEmotions = this.inMemoryService.getMovieEmotions();
  this.thisMEmotion = this.mEmotions.find((emotions)=>emotions.movieId == this.providedId);
  this.thisMEmotion == null? this.addEmotions= new MovieEmotion(this.providedId,0,0,0,0,0,0) :this.addEmotions=this.thisMEmotion;

  window.scroll(0,0);

    }
  )

  }



  private addMovieEmotions(emotion:string): void{

    switch(emotion){
      case 'happy':
        this.addEmotions.happy = this.addEmotions.happy+1;
        break;
      case 'sad':
        this.addEmotions.sad = this.addEmotions.sad+1;
        break;
      case 'love':
        this.addEmotions.loved = this.addEmotions.loved+1;
        break;
      case 'fear':
        this.addEmotions.fear = this.addEmotions.fear+1;
        break;
      case 'opti':
        this.addEmotions.optimistic = this.addEmotions.optimistic+1;
        break;
      case 'amazed':
        this.addEmotions.amazed = this.addEmotions.amazed+1;
        break;


    }
    this.inMemoryService.addEmotion(this.addEmotions.movieId, this.addEmotions.happy, this.addEmotions.sad, this.addEmotions.loved, this.addEmotions.fear, this.addEmotions.optimistic, this.addEmotions.amazed);
  }

  clickMethod(id:number) {
    this.remove = true;
  }

  onClose(){
    this.remove = false;
  }


}
