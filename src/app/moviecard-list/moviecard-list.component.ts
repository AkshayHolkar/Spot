import { Component, OnInit } from '@angular/core';
import {MoviesDataService} from '../service/movies-data.service';
import {dataType} from '../share/movie'



@Component({
  selector: 'app-moviecard-list',
  templateUrl: './moviecard-list.component.html',
  styleUrls: ['./moviecard-list.component.css']
})
export class MoviecardListComponent implements OnInit {
 
  isFetching = false;
  movies:dataType[]=[];

  constructor(private movie:MoviesDataService) {}

  ngOnInit() {
    this.isFetching = true;
    this.movie.fetchMovies().subscribe(data=>{
      this.isFetching = false;
     this.movies =data.results;
    })  
  }
 

}
