import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from '../article';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  articles: Article[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.articles = [];
    const header = new HttpHeaders();
    header.append('Content-type', 'text/plain');
    this.http.post<Article[]>('http://localhost/article.php', header).subscribe(
      result => { this.articles = result; }
    );
  }

  count(i) {
    return new Array(i);
  }

}
