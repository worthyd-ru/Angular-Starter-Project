import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PostState, PostAdapter } from './posts.state';

export const FEATURE_NAME = 'posts';

export const getPostState = createFeatureSelector<PostState>(FEATURE_NAME);

export const { selectIds, selectEntities, selectAll, selectTotal } = PostAdapter.getSelectors(getPostState);

export const getArePostsLoaded = createSelector(getPostState, (state) => state.loaded);
export const getArePostsLoading = createSelector(getPostState, (state) => state.loading);
