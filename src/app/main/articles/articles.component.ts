import {Component, OnInit} from '@angular/core';
import {Article} from '../../article';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommentsService} from '../../comments.service';
import {DatabaseService} from '../../database.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private database: DatabaseService, private comments: CommentsService) { }

  ngOnInit() {
   this.articles = this.database.getArticles(0, 8);
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
