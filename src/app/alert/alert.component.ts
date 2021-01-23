import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {InMemoryDataService} from '../service/in-memory-data.service';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations:[
    trigger('boxState', [
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
export class AlertComponent implements OnInit {

  @Input() id: number;
  @Output() close = new EventEmitter<void>();

  constructor(private inMemoryService:InMemoryDataService, private router: Router) { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }

  onRemove(){
   this.inMemoryService.removeMovie(this.id);
   this.router.navigate(['']);
  }

}
