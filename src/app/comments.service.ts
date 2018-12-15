import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService implements OnInit {

  comments: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
            this.comments[comment['movie_id']].push(comment['points']);
          }
        );
      }
    );
  }

  getPoints(id) {
    let score = 0;
    if (!this.comments[id]) {
      return 0;
    }
    this.comments[id].forEach( voto => score += parseInt(voto, 10));
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
    return {'background-color': 'white'};
  }
}
