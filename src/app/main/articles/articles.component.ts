import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[];

  constructor() { }

  ngOnInit() {
  }

  count(i) {
    return new Array(i);
  }

}
