import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.scss']
})
export class CommentPostComponent implements OnInit {
  @Input() user: User;
  @Input() content: string;
  @Input() creationDateTime: Date;

  constructor() { }

  ngOnInit() {
  }

  get timeAgo() {
    return this.creationDateTime.toString();
  }

}
