import {Component, OnInit} from '@angular/core';
import {CommentsService} from './comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private comments: CommentsService) {
  }

  ngOnInit(): void {
    this.comments.ngOnInit();
  }
}
