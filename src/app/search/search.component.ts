import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {InMemoryDataService} from '../service/in-memory-data.service';
import {MoviesDataService} from '../service/movies-data.service';
import {dataType} from '../share/movie'
import {MovieEmotion} from '../share/movieEmotion';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  isFetching = false;
  providedEmotion:string;
  movies:MovieEmotion[]=[];
  allMovies:dataType[]=[];
  showMovies: dataType[]=[];

  constructor(private route:ActivatedRoute, private emotionService:InMemoryDataService, private movie:MoviesDataService) { }

  ngOnInit() {

    this.route.params
    .subscribe(
      (params:Params)=>{
    this.getAllMovies();

    this.getListofMovies();

    this.setShowMovies();   
      });  
   
  }


  getAllMovies(){

    this.isFetching = true;
    this.route.data.subscribe(
      (data:Data)=> {
        this.isFetching = false;
        this.allMovies = data['movie'].results;
  });

  }


  getListofMovies(){

    this.movies = [];
    this.providedEmotion = this.route.snapshot.params['emotion'];
    switch(this.providedEmotion){
      case 'happy':
        this.movies = this.emotionService.getMovieEmotions().filter((e)=>e.happy>0);
        break;
      case 'sad':
        this.movies = this.emotionService.getMovieEmotions().filter((e)=>e.sad>0);
        break;
      case 'loved':
        this.movies = this.emotionService.getMovieEmotions().filter((e)=>e.loved>0);
        break;
      case 'fear':
        this.movies = this.emotionService.getMovieEmotions().filter((e)=>e.fear>0);
        break;
      case 'optimistic':
        this.movies = this.emotionService.getMovieEmotions().filter((e)=>e.optimistic>0);
        break;
      case 'amazed':
        this.movies = this.emotionService.getMovieEmotions().filter((e)=>e.amazed>0);
        break;     

    }

  }


  setShowMovies(){

    this.showMovies = [];
    for(let movie of this.movies){
      this.showMovies.push(this.allMovies.find((e)=>e.id==movie.movieId));
    }  

  }

}
