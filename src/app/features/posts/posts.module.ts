import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsModule as PostsDataModule } from 'data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FEATURE_NAME } from './state/posts.selectors';
import { LoadedClanEffects } from './state/posts.effects';
import { PostReducer } from './state/posts.reducer';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    PostsRoutingModule,
    PostsDataModule,
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, PostReducer),
    EffectsModule.forFeature([LoadedClanEffects])
  ]
})
export class PostsModule {}
