import {Component, OnInit} from '@angular/core';
import {CommentsService} from './comments.service';
import {DatabaseService} from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private comments: CommentsService, private database: DatabaseService) {
  }

  ngOnInit(): void {
    this.comments.ngOnInit();
    this.database.ngOnInit();
  }
}
