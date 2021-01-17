import {Reducer} from 'redux'
import {PostsActionTypes, PostsState} from './types'

export const initialState: PostsState = {
  posts: [],
}

const reducer: Reducer<PostsState> = (state = initialState, action) => {
  switch (action.type) {
    case PostsActionTypes.GET_ALL_POSTS_SUCCESS: {
      return {...state, posts: action.payload}
    }
    default: {
      return state
    }
  }
}

export {reducer as postsReducer}
