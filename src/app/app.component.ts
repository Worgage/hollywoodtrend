import {Component, OnInit} from '@angular/core';
import {CommentsService} from './comments.service';
import {DatabaseService} from './database.service';
import {CookieService} from 'ngx-cookie-service';
import {LoginService} from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HollywoodTrend';

  constructor(private comments: CommentsService,
              private database: DatabaseService,
              private login: LoginService) {
  }

  ngOnInit(): void {
    this.comments.ngOnInit();
    this.database.ngOnInit();
    this.login.ngOnInit();
  }

  isLoaded() {
    return this.database.isLoaded();
  }
}
