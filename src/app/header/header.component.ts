import { Component, OnInit } from '@angular/core';
import { faSmile, faSadCry, faKissWinkHeart, faFlushed, faGrinAlt, faGrinStars } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Import icons
  happyIcon = faSmile;
  sadIcon = faSadCry;
  loveIcon = faKissWinkHeart;
  fearIcon = faFlushed;
  optimisticIcon = faGrinAlt;
  amazedIcon = faGrinStars;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  

}
