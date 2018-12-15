import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private ref: any;

  constructor(public dialog: MatDialog, private login: LoginService) { }

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
    this.ref.close();
    return this.login.getName();
  }

}
