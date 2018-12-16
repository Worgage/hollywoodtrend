import {Component, OnInit} from '@angular/core';
import {Movie} from '../../movie';
import {CommentsService} from '../../comments.service';
import {DatabaseService} from '../../database.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  movies: Movie[];

  constructor(private database: DatabaseService, private comments: CommentsService) { }

  ngOnInit() {
    this.movies = this.database.getMovies(0, 11);
  }

  count(i) {
    return new Array(i);
  }

  getPoints(id) {
    return this.comments.getPoints(id);
  }

  getColor(id) {
    return this.comments.getColor(id);
  }

}
