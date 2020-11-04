import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsModule as PostsDataModule } from 'data';

@NgModule({
  declarations: [PostsComponent],
  imports: [PostsRoutingModule, PostsDataModule, CommonModule]
})
export class PostsModule {}
