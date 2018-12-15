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

  getColor(id) { /*
    overloadImg(id: string) {

      if ( this.percentages[id] >= 90) {
        return {color: 'red'};
      }
      if ( this.percentages[id] < 90 && this.percentages[id] >= 70) {
        return {color: 'rgb(218, 187, 17)'};
      }

      if ( this.percentages[id] > 70 ) {
        return {color: 'green'};
      }

      return {color: 'green'};
    }*/
  }
}
