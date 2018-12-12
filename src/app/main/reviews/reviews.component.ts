import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../movie';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit() {
  }

  count(i) {
    return new Array(i);
  }

}
