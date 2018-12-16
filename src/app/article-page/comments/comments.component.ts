import { Component, OnInit, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommentsService} from '../../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  movie_comments: [];
  @Input() id: string;

  constructor(private http: HttpClient, private comments: CommentsService) { }

  ngOnInit() {
    this.movie_comments = [];
    this.movie_comments = this.comments.getComments(parseInt(this.id, 10));
    console.log(this.movie_comments);
  }

  count(i) {
    return new Array(i);
  }

  getColor(points) {
    if ( points >= 85) { return {'background-color': 'rgb(92, 153, 68)'}; }
    if ( points < 85 && points >= 60) { return {'background-color': 'rgb(235, 194, 61)'}; }
    if ( points < 60 ) { return {'background-color': 'rgb(255, 105, 96)' }; }
    return {'background-color': 'white'};
  }

}
