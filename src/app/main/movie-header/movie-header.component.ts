import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from '../../movie';
import {CommentsService} from '../../comments.service';
import {DatabaseService} from '../../database.service';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css']
})
export class MovieHeaderComponent implements OnInit {

 movies: Movie[];

  constructor(private database: DatabaseService, private comments: CommentsService) { }

  ngOnInit() {
   this.movies = this.database.getMovies(0, 6);
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
