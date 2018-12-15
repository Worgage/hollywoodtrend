import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpHeaders, HttpRequest} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Article} from '../article';
import {Movie} from '../movie';
import {CommentsService} from '../comments.service';
import {DomSanitizer} from '@angular/platform-browser';
import {LoginService} from '../login.service';
import {MatDialog} from '@angular/material';
import {ReviewComponent} from './review/review.component';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  private id = '';
  article: Article;
  movie: Movie;

  constructor(
    private params: ActivatedRoute,
    private http: HttpClient,
    private comments: CommentsService,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private login: LoginService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    console.log(this.login.isLogged());
    this.id = this.params.snapshot.paramMap.get('id');
    const header = new HttpHeaders();
    header.append('Content-type', 'text/plain');
    const data = new FormData();
    data.append('id', this.id);
    this.http.post<Article[]>('http://localhost/article.php', data, {headers: header}).subscribe(
      result => {
        this.article = result[0];
      }
    );
    this.http.post<Movie[]>('http://localhost/movies.php', data, {headers: header}).subscribe(
      result => this.movie = result[0]
    );
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
      height: '500px'
    });
  }

}
