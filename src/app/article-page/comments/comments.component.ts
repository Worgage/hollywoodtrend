import { Component, OnInit, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: [];
  @Input() id: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.comments = [];

    const data = new FormData();
    data.append('id', this.id);
    const header = new HttpHeaders();
    header.append('Content-type', 'text/plain');
    this.http.post<[]>('http://localhost/comments.php', data, {headers: header}).subscribe(
      result =>  {this.comments = result; console.log(this.comments); }
    );
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
