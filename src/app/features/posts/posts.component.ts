import { Component, OnInit } from '@angular/core';
import { PostsService } from 'data';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  constructor(private postService: PostsService) {}

  posts$ = this.postService.getPosts();

  ngOnInit(): void {}
}
