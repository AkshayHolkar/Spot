import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {InMemoryDataService} from '../service/in-memory-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
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
