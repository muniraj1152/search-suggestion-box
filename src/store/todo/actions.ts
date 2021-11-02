import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_FAILURE,
  FETCH_TODO_SUCCESS,
} from './actionTypes';
import {
  FetchTodoRequest,
  FetchTodoSuccess,
  FetchTodoSuccessPayload,
  FetchTodoFailure,
  FetchTodoFailurePayload,
} from './types';

export const fetchTodoRequest = (payload: any): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
  payload,
});

export const fetchTodoSuccess = (
  payload: FetchTodoSuccessPayload
): FetchTodoSuccess => ({
  type: FETCH_TODO_SUCCESS,
  payload,
});

export const fetchTodoFailure = (
  payload: FetchTodoFailurePayload
): FetchTodoFailure => ({
  type: FETCH_TODO_FAILURE,
  payload,
});
