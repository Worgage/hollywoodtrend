import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from '../article';
import {ActivatedRoute} from '@angular/router';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  articles: Article[];
  private page: number;

  constructor(private database: DatabaseService,
              private params: ActivatedRoute) { }

  ngOnInit() {
    this.params.params.subscribe(params => {
      this.page = parseInt(this.params.snapshot.paramMap.get('page'), 10);
      this.articles = this.database.getArticles( this.page * 9, (this.page * 9) + 9 );
    });
  }

  count(i) {
    return new Array(i);
  }

}
