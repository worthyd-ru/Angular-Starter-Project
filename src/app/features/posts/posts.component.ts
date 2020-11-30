import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadPosts } from './state/posts.actions';
import { PostState } from './state/posts.state';
import { selectAll } from './state/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(public store: Store<PostState>) {}

  posts$ = this.store.pipe(select(selectAll));

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }
}
