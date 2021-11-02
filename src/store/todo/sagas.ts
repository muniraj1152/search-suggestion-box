import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchTodoFailure, fetchTodoSuccess } from './actions';
import { FETCH_TODO_REQUEST } from './actionTypes';
import { ITodo } from './types';

const getTodos = ({ searchText }: any) =>
  axios.get<any[]>(
    `https://searchv7.expertrec.com/v6/search/eb17a931b1ab4950928cabbf42527715/?user=&q=${searchText}&size=6&suggestions=1&maxSuggestions=6`
  );

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga({ payload }: any): SagaIterator {
  try {
    const response = yield call(getTodos, payload);
    yield put(
      fetchTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
