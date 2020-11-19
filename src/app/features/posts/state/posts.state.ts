import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Post } from 'models';

export interface PostState extends EntityState<Post> {
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const PostAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  selectId: (post: Post) => post.id,
  sortComparer: false
});

export const PostInitialState: PostState = PostAdapter.getInitialState({
  loaded: false,
  loading: false,
  error: null
});
