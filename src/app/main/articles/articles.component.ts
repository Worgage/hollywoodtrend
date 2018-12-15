import {Component, OnInit} from '@angular/core';
import {Article} from '../../article';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommentsService} from '../../comments.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private http: HttpClient, private comments: CommentsService) { }

  ngOnInit() {
    const header = new HttpHeaders();
    header.append('Content-type', 'text/plain');
    this.http.post<Article[]>('http://localhost/article.php', header).subscribe(
      result => { this.articles = result; }
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
