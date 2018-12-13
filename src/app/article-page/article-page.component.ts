import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  constructor(private params: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.params.snapshot.paramMap.get('id'));
  }

}
