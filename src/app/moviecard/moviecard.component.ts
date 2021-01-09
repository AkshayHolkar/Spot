import { Component, Input, OnInit } from '@angular/core';
import { dataType } from '../movie';


@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {

  @Input() movie: dataType;

  imageurl = 'https://image.tmdb.org/t/p/w92/{{movie.poster_path}}'; 
  constructor() { }

  ngOnInit(): void {
  }

}
