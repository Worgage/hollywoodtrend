import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from './article';
import {Movie} from './movie';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit {

  articles_loaded: boolean;
  movies_loaded: boolean;

  private articles: Article[];
  private movies: Movie[];
  s: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.articles_loaded = false;
    this.movies_loaded = false;
    const header = new HttpHeaders();
    header.append('Content-type', 'text/plain');
    this.s = this.http.post<Movie[]>('http://localhost/movies.php', header).subscribe(
      result => {this.movies = result; this.movies_loaded = true; }
    );
    this.http.post<Article[]>('http://localhost/article.php', header).subscribe(
      result => { this.articles = result;  this.articles_loaded = true; }
    );
  }

  getMovie(id): Movie {
    return this.movies_loaded ? this.movies.find(
      movie => movie.id === id
    ) : undefined;
  }

  getArticle(id): Article {
    return this.articles_loaded ? this.articles.find(
      article => article.movie_id === id
    ) : undefined;
  }

  getArticles(from: number, to: number) {
    return this.articles_loaded ? this.articles.slice(from, to) : [];
  }

  getMovies(from: number, to: number) {
    return this.movies_loaded ? this.movies.slice(from, to) : [];
  }

  searchMovie(text: string) {
    return this.movies_loaded ? this.movies.filter(
      movie => movie.title.toLowerCase().includes(text.toLowerCase())
    ) : [];
  }
  isLoaded() {
    return this.movies_loaded && this.articles_loaded;
  }
}
