import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'models';

@Component({
  selector: 'lib-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input()
  isLoading: boolean;

  @Input()
  posts: Post[];

  constructor() {}

  ngOnInit(): void {
  }
}
