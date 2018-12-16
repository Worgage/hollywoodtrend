import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  private logged: boolean;
  private user: User;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.logged = false;
  }

  login(email: string, password: string) {
    const formData = new FormData();
    formData.append('email', email.trim());
    formData.append('password', password.trim());
    formData.append('Content-type', 'text/plain');
    this.http.post<User>('http://localhost/login.php', formData).subscribe(
      result => {
        this.user = result;
        this.snackBar.open(result ? 'Login Successful' : 'Login Failed try again', '',
          {duration: 2000}
        );
      }
    );
  }

  isLogged(): boolean {
    return !!this.user;
  }

  getName(): string {
    return this.user ? this.user.name + ' ' + this.user.surname : '';
  }

  getId() {
    return this.user ? this.user.id : '';
  }
}
