import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {movieDetail} from '../movie-detail'
import {MoviesDataService} from '../movies-data.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  isFetching = false;
  movie:movieDetail;
  providedId: number;

  constructor(private route:ActivatedRoute, private service:MoviesDataService) { }

  ngOnInit(){

    this.providedId = this.route.snapshot.params['id'];
    this.isFetching = true;
    this.service.fetchMovieDetail(this.providedId).subscribe(data=>{
      this.isFetching = false;
     this.movie =data;    
  });
    
    }

}
