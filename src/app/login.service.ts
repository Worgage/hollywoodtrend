import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {User} from './user';
import {CommentsService} from './comments.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  private logged: boolean;
  private user: User;

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              private cookie: CookieService,
              private comments: CommentsService) { }

  ngOnInit(): void {
    this.logged = false;
    if (this.cookie.get('id') !== '') {
      console.log('loggato');
      const formData = new FormData();
      formData.append('id', this.cookie.get('id'));
      formData.append('Content-type', 'text/plain');
      this.http.post<User>('http://localhost/user.php', formData).subscribe(
        result => {
          this.user = result;
          this.logged = true;
        }
      );
    }
  }

  login(email: string, password: string) {
    const formData = new FormData();
    formData.append('email', email.trim());
    formData.append('password', password.trim());
    formData.append('Content-type', 'text/plain');
    this.http.post<User>('http://localhost/login.php', formData).subscribe(
      result => {
        this.user = result;
        if (result) {
          this.logged = true;
          this.cookie.set('id', this.user.id.toString());
        }
        this.snackBar.open(result ? 'You are now logged' : 'Error', '',
          {duration: 2000}
        );
      }
    );
  }

  register(name: string, surname: string, email: string, country: string, password: string) {
    const formData = new FormData();
    formData.append('name', name.trim());
    formData.append('surname', surname.trim());
    formData.append('country', country.trim());
    formData.append('email', email.trim());
    formData.append('password', password.trim());
    formData.append('Content-type', 'text/plain');
    this.http.post<User>('http://localhost/register.php', formData).subscribe(
      result => {
        if (result) {
          this.login(email, password);
        }
      }
    );
  }

  logout() {
    this.cookie.deleteAll('/');
    this.logged = false;
    this.user = undefined;
  }

  isLogged(): boolean {
    return this.logged;
  }

  getName(): string {
    return this.user ? this.user.name + ' ' + this.user.surname : undefined;
  }

  getId() {
    return this.user ? this.user.id : undefined;
  }

  comment(movie_id) {
    movie_id = parseInt(movie_id, 10);
    if (!this.user) {
      return false;
    } else {
      return this.comments.getComments(movie_id).find(
        comment => comment['user_id'] === this.user.id
      );
    }
  }
}
