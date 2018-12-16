import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {CommentsService} from '../comments.service';
import {ActivatedRoute} from '@angular/router';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any;
  page: number;

  constructor(private database: DatabaseService, private comments: CommentsService, private params: ActivatedRoute) { }

  ngOnInit() {
    this.params.params.subscribe(params => {
      this.movies = [];
        this.page = parseInt( params['page'], 10);
        const search =  params['search'];
        this.movies =  search ? this.database.searchMovie(search) : this.database.getMovies( 20 * this.page , 20 * (this.page) + 20 );
      }
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

  getColor(id) {
    return this.comments.getColor(id);
  }

}
