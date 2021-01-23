import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../service/in-memory-data.service';
import {MoviesDataService} from '../service/movies-data.service';
import {dataType} from '../share/movie';
import {ActivatedRoute, Data} from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';




@Component({
  selector: 'app-moviecard-list',
  templateUrl: './moviecard-list.component.html',
  styleUrls: ['./moviecard-list.component.css'],
  animations:[
    trigger('cardState', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0) scale(1)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(0) scale(0.5)'}
        ),
        animate(400)
      ]),
  ])
]
})
export class MoviecardListComponent implements OnInit {

  isFetching = false;
  movies:dataType[]=[];
  removedMovies:number[];

  constructor(private movieService:MoviesDataService, private inMemoryService:InMemoryDataService, private route:ActivatedRoute) {}

  ngOnInit() {

    this.getMovies();
    this.removeDeletedMovies();
  }

  getMovies(){

    this.isFetching = true;
    this.route.data.subscribe(
      (data:Data)=> {
        this.isFetching = false;
        this.movies = data['movie'].results;
  });

  }


  removeDeletedMovies(){

    this.removedMovies = this.inMemoryService.getRemovedMovies();

    for(let id of this.removedMovies){
      this.movies = this.movies.filter((e)=> e.id != id);
    }


  }


}
