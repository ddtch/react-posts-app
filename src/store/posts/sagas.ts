import {call, delay, put} from 'redux-saga/effects'
import {getAllPostsSuccess} from './actions';
import {callApi} from '../../utils/api';

const API_URL = 'http://jsonplaceholder.typicode.com';

function* handleGetAllPosts() {
  try {
    const res = yield call(callApi, 'GET', API_URL, 'posts');

    if (res.error) {
      console.log(res.error);
    } else {
      localStorage.setItem('posts', JSON.stringify(res));
      yield put(getAllPostsSuccess(res))
    }
  } catch (err) {
    // errors occurred etc
    console.log(err);
  }
}

function* postsSaga() {
  while (true) {
    yield call(handleGetAllPosts);
    yield delay(5 * 60000); // call every 5 minutes
  }
}


export default postsSaga
