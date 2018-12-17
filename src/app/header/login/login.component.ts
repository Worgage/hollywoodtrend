import { Component } from '@angular/core';
import {LoginService} from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   email: string;
   password: string;

  constructor(private login: LoginService) { }


  onSubmit() {
    this.login.login(this.email, this.password);
  }

}
