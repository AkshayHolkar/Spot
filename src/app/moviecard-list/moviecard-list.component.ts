import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../service/in-memory-data.service';
import {MoviesDataService} from '../service/movies-data.service';
import {dataType} from '../share/movie';
import {ActivatedRoute, Data} from '@angular/router';




@Component({
  selector: 'app-moviecard-list',
  templateUrl: './moviecard-list.component.html',
  styleUrls: ['./moviecard-list.component.css']
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
