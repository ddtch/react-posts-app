import { combineReducers, createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {PostsState} from './posts/types';
import {postsReducer} from './posts/reducer';
import {all, fork} from 'redux-saga/effects';
import postsSaga from './posts/sagas';
import createSagaMiddleware from "redux-saga";

export interface AppState {
  postsState: PostsState,
}

// @ts-ignore
const initialState = window.INITIAL_REDUX_STATE;

const rootReducer = combineReducers({
  postsState: postsReducer,
});

export function* rootSaga() {
  yield all([fork(postsSaga)])
}

// create the composing function for our middlewares
const composeEnhancers = composeWithDevTools({})
// create the redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;

