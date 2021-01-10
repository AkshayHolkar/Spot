import { Component, OnInit, Input } from '@angular/core';
import {dataType} from '../movie';
import {MoviesDataService} from '../movies-data.service';



@Component({
  selector: 'app-similar-moviecard',
  templateUrl: './similar-moviecard.component.html',
  styleUrls: ['./similar-moviecard.component.css']
})
export class SimilarMoviecardComponent implements OnInit {

  @Input() id:number;

  similarMovies:dataType[]=[];
  isFetching=false;

  count:number;

  constructor(private service:MoviesDataService) { }

  ngOnInit(){
    this.isFetching = true;
    this.service.similarMovies(this.id).subscribe(data=>{
      this.isFetching = false;
     this.similarMovies =data.results.slice(0,6);    
  });
  }

}
