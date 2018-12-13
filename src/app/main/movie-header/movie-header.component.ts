import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from '../../movie';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css']
})
export class MovieHeaderComponent implements OnInit {

 articles: Movie[];
 comments: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const header = new HttpHeaders();
    this.comments = {};
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
    this.http.post<Movie[]>('http://localhost/movies.php', header).subscribe(
      result =>  {
        this.articles = result;
      }
    );
  }

  count(i) {
    return new Array(i);
  }

  getPoints(id) {
    let score = 0;
    if (!this.comments[id]) {
      return 0;
    }
    this.comments[id].forEach( voto => score += parseInt(voto, 10));
    return Math.round(score / this.comments[id].length);
  }


}
