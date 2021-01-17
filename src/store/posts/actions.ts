import {action} from 'typesafe-actions';
import {Post, PostsActionTypes} from './types';

export const getAllPosts = () => action(PostsActionTypes.GET_ALL_POSTS);
export const getAllPostsSuccess = (posts: Post[]) => action(PostsActionTypes.GET_ALL_POSTS_SUCCESS, posts);
export const getPost = (id: number) => action(PostsActionTypes.GET_POST, id);
