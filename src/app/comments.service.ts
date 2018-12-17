import {EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentsService implements OnInit {

  comments: any;

  new: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    this.comments = {};
    const header = new HttpHeaders();
    header.append('Content-type', 'text/plain');
    this.http.post<[]>('http://localhost/comments.php', header).subscribe(
      result =>  {
        result.forEach(
          comment => {
            if (!this.comments[comment['movie_id']]) {
              this.comments[comment['movie_id']] = [];
            }
            this.comments[comment['movie_id']].push(comment);
          }
        );
        this.new.emit(true);
      }
    );
  }

  getComments(id: number) {
    return this.comments[id] ? this.comments[id] : [];
  }

  getPoints(id) {
    let score = 0;
    if (!this.comments[id]) {
      return 0;
    }
    this.comments[id].forEach( comment => score += parseInt(comment['points'], 10));
    return Math.round(score / this.comments[id].length);
  }

  getColor(id) {
    const perc =  this.getPoints(id);
    if ( perc >= 85) { return {'background-color': 'rgb(92, 153, 68)'}; }
    if ( perc < 85 && perc >= 60) { return {'background-color': 'rgb(235, 194, 61)'}; }
    if ( perc < 60 ) { return {'background-color': 'rgb(255, 105, 96)' }; }
    return {'background-color': 'white'};
  }

  getBackgroundColor(id) {
    const perc =  this.getPoints(id);
    if ( perc >= 85) { return {'background-color': 'darkseagreen'}; }
    if ( perc < 85 && perc >= 60) { return {'background-color': 'goldenrod'}; }
    if ( perc < 60 ) { return {'background-color': 'lightcoral' }; }
  }

  insert(user: number, movie: number, comment: string, points: string) {
    const formData = new FormData();
    formData.append('user_id', user.toString());
    formData.append('movie_id', movie.toString());
    formData.append('comment', comment);
    formData.append('points', points);
    formData.append('Content-type', 'text/plain');
    this.http.post<[]>('http://localhost/comments.php', formData).subscribe(
      result =>  {
        this.snackBar.open(result ? 'Comment Inserted' : 'Comment Error', '',
          {duration: 2000}
        );
        if (result) {
          this.ngOnInit();
         this.new.emit(true);
        }
      }
    );
  }

  newComments() {
    return this.new;
  }
}
