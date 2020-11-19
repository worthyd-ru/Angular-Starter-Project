import { createReducer, on, Action } from '@ngrx/store';
import { PostInitialState, PostAdapter, PostState } from './posts.state';
import * as PostActions from './posts.actions';

const reducer = createReducer(
  PostInitialState,
  on(PostActions.loadPosts, (state) => ({
    ...state,
    loaded: false,
    loading: true
  })),
  on(PostActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(PostActions.loadPostsSuccess, (state, { posts }) => {
    return PostAdapter.upsertMany(posts, { ...state });
  })
);

export function PostReducer(state: PostState | undefined, action: Action): PostState {
  return reducer(state, action);
}
