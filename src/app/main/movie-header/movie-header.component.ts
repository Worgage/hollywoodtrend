import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../article';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css']
})
export class MovieHeaderComponent implements OnInit {

  @Input() articles: Article[];

  constructor() { }

  ngOnInit() {}

  count(i) {
    return new Array(i);
  }


}
