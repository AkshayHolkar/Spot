import { Component, Input, OnInit } from '@angular/core';
import { dataType } from '../share/movie';


@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {

  @Input() movie: dataType;

  constructor() { }

  ngOnInit(): void {
  }

}
