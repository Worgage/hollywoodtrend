import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {Article} from '../article';
import {Movie} from '../movie';
import { Location } from '@angular/common';
import {CommentsService} from '../comments.service';
import {DomSanitizer} from '@angular/platform-browser';
import {LoginService} from '../login.service';
import {MatDialog} from '@angular/material';
import {ReviewComponent} from './review/review.component';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  id: string;
  article: Article;
  movie: Movie;

  constructor(
    private params: ActivatedRoute,
    private database: DatabaseService,
    private comments: CommentsService,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private l: Location,
    private login: LoginService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.id = this.params.snapshot.paramMap.get('id');
    this.movie = this.database.getMovie(this.id);
    this.article = this.database.getArticle(this.id);
  }

  getPoints() {
    return this.comments.getPoints(this.movie.id);
  }

  getBody() {
    return this.article.body ? this.sanitizer.bypassSecurityTrustHtml(this.article.body) : '';
  }

  background() {
    return this.movie ? this.comments.getBackgroundColor(this.movie.id) : {};
  }

  isLogged() {
    return this.login.isLogged();
  }

  rate() {
    this.dialog.open(ReviewComponent, {
      width: '500px',
      height: '500px',
      data : {
        movie_id: this.movie.id
      }
    });
  }

  back() {
    this.l.back();
  }

}
