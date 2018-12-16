import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from './article';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit {

  private articles: Article[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const header = new HttpHeaders();
    header.append('Content-type', 'text/plain');
    this.http.post<Article[]>('http://localhost/article.php', header).subscribe(
      result => { this.articles = result; }
    );
  }

  getArticles(from: number, to: number) {
    return this.articles ? this.articles.slice(from, to) : [];
  }
}
