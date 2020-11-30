import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PostsService } from 'data';
export const LOADED_CLANS_KEY = 'clanSearch.loadedClans';
import { PostState } from './posts.state';
import { loadPosts, loadPostsSuccess, loadPostsFailure } from './posts.actions';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Post } from 'models';

@Injectable()
export class LoadedClanEffects {
  constructor(private actions$: Actions, private store: Store<PostState>, private postService: PostsService) {}

  retrievePosts = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      switchMap(() => {
        return this.postService.getPosts().pipe(
          map((posts) => loadPostsSuccess({ posts: posts as Post[] })),
          catchError((error) => of(loadPostsFailure({ error })))
        );
      })
    )
  );
}
