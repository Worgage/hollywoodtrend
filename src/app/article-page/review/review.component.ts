import {Component, Inject, OnInit} from '@angular/core';
import {LoginService} from '../../login.service';
import {CommentsService} from '../../comments.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  private id: number;
  comment: string;
  points: number;

  constructor(
    private login: LoginService,
    private comments: CommentsService,
    private ref: MatDialogRef<ReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.id = this.data['movie_id'];
  }

  onSubmit() {
    this.comments.insert(this.login.getId(), this.id, this.comment.trim(), this.points.toString());
    this.ref.close(true);
  }

}
