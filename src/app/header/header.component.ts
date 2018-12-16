import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private ref: any;
  search: string;

  constructor(public dialog: MatDialog, private login: LoginService, private router: Router) { }

  openLogin() {
    this.ref = this.dialog.open(LoginComponent, {
      width: '330px',
      height: '330px'
    });
  }

  isLogged() {
    return this.login.isLogged();
  }

  getName() {
    if (this.ref) { this.ref.close(); }
    return this.login.getName();
  }

  go() {
    if (this.search !== '') {
      this.router.navigate(['/movies/0/' + this.search]);
    }
  }

}
