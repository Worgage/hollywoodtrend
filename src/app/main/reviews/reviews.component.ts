import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../movie';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {CommentsService} from '../../comments.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  movies: Movie[];

  constructor(private http: HttpClient, private comments: CommentsService) { }

  ngOnInit() {
    const header = new HttpHeaders();
    header.append('Content-type', 'text/plain');
    this.http.post<Movie[]>('http://localhost/movies.php', header).subscribe(
      result => this.movies = result
    );
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
