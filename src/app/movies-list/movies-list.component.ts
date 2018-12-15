import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {CommentsService} from '../comments.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any;

  constructor(private http: HttpClient, private comments: CommentsService) { }

  ngOnInit() {
    const header = new HttpHeaders();
    header.append('Content-type', 'text/plain');
    this.http.post('http://localhost/movies.php', header).subscribe(
      result => {this.movies = result; }
    );
  }

  count(i) {
    return new Array(i);
  }

  alph() {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'z'];
  }

  getComments(id) {
    return this.comments.getPoints(id);
  }

}
