import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from '../../movie';
import {CommentsService} from '../../comments.service';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css']
})
export class MovieHeaderComponent implements OnInit {

 movies: Movie[];

  constructor(private http: HttpClient, private comments: CommentsService) { }

  ngOnInit() {
    const header = new HttpHeaders();
    header.append('Content-type', 'text/plain');
    this.http.post<Movie[]>('http://localhost/movies.php', header).subscribe(
      result =>  {
        this.movies = result;
      }
    );
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
