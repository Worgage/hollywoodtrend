import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpHeaders, HttpRequest} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Article} from '../article';
import {Movie} from '../movie';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  private id = '';
  article: Article;
  movie: Movie;

  constructor(private params: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.params.snapshot.paramMap.get('id');
    const header = new HttpHeaders();
    header.append('Content-type', 'text/plain');
    const data = new FormData();
    data.append('id', this.id);
    this.http.post<Article[]>('http://localhost/article.php', data, {headers: header}).subscribe(
      result => {this.article = result[0]; console.log(this.article); }
    );
    this.http.post<Movie[]>('http://localhost/movies.php', data, {headers: header}).subscribe(
      result => {this.movie = result[0]; console.log(this.movie); }
    );
  }

}