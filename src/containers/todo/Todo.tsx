import React, { useState } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from '../../store/todo/selectors';
import { fetchTodoRequest } from '../../store/todo/actions';

import ProductItem from '../../components/itemView/Item';
import BoldText from '../../components/boldText/BoldText';
import styles from './Todo.module.scss';
import searchIcon from '../../assets/images/icon-search.svg';
import malaysiaFlag from '../../assets/images/malaysia.png';

const Todo = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  /**
   * Search and get list of items based on search text
   * @param param searchText string
   */
  const onChange = ({ value }: any) => {
    const valueAfterTrim = value ? value.trim() : '';
    setSearchText(valueAfterTrim);
    if (valueAfterTrim) {
      dispatch(fetchTodoRequest({ searchText: valueAfterTrim }));
    }
  };

  return (
    <div style={{ padding: '15px' }} className="todo-container">
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className="offset-3">
          <div className="col-6 px-0">
            <Form.Label>Search</Form.Label>
            <InputGroup>
              <FormControl
                placeholder="Find your furniture"
                className="shadow-sm"
                onChange={(event: any) => onChange(event.target)}
              />
              <img src={searchIcon} alt="search icon" className="search-icon" />
            </InputGroup>
          </div>
          {searchText ? (
            <div className="suggestion-box card px-0">
              <div className="row no-gutters">
                <div className="col-3 p-3 border-right">
                  <label className="title">TOP SEARCHES</label>
                  {todos.suggestions &&
                    todos.suggestions.map((item: any, index: any) => {
                      return (
                        <BoldText
                          key={index}
                          text={item.suggestion}
                          boldText={searchText}
                        ></BoldText>
                      );
                    })}
                  <label className="title">TOP COLLECTIONS</label>
                  {todos.sfacets &&
                    todos.sfacets.collectionname &&
                    todos.sfacets.collectionname.map((item: any) => {
                      return (
                        <div key={item.name}>
                          <img src={malaysiaFlag} width="20" height="14" />
                          <span className="item pl-2">{`${item.name[0].toUpperCase()}${item.name
                            .slice(1)
                            .toLowerCase()}`}</span>
                        </div>
                      );
                    })}
                </div>
                <div className="col-9  p-3">
                  <div className="title pb-1">
                    POPULAR PRODUCTS IN ` {searchText.toUpperCase()} `
                  </div>
                  <div className="row pl-2">
                    {todos.results &&
                      todos.results.map((item: any) => {
                        return (
                          <ProductItem item={item} key={item.id}></ProductItem>
                        );
                      })}
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className={`${styles.searchResultsBtn} px-5 mt-2`}
                    >
                      View All Search Results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Todo;
