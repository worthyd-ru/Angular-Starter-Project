import { createAction, props } from '@ngrx/store';

import { Post } from 'models';

const base = '[Posts] -';

export const loadPosts = createAction(`${base} Load Posts`);
export const loadPostsSuccess = createAction(`${base} Load Posts Success`, props<{ posts: Post[] }>());
export const loadPostsFailure = createAction(`${base} load Posts Failure`, props<{ error: any }>());
