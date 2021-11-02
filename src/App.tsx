import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todo from './containers/todo/Todo';
import Header from './components/header/Header';

import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
