export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export enum PostsActionTypes {
  GET_ALL_POSTS = '[posts] Get all posts',
  GET_ALL_POSTS_SUCCESS = '[posts] Get all posts success',
  GET_POST = '[posts] Get post by id',
}

export interface PostsState {
  posts: Post[]
}
