import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('email', this.email.trim().toLocaleLowerCase());
    formData.append('password', this.password.trim());
    formData.append('Content-type', 'text/plain');
    this.http.post('http://localhost/login.php', formData).subscribe(
      result => {
        this.snackBar.open(result ? 'Login Successful' : 'Login Failed try again', '',
          { duration: 2000 }
          );
      }
    );
  }

}
