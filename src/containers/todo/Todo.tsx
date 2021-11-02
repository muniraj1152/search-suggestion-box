import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from '../../store/todo/selectors';
import { fetchTodoRequest } from '../../store/todo/actions';

const Todo = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchTodoRequest({ searchText: 'sofa' }));
  }, [dispatch]);

  return (
    <div style={{ padding: '15px' }} className="text-primary">
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div>{JSON.stringify(todos)}</div>
      )}
    </div>
  );
};

export default Todo;
