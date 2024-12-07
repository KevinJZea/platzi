import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { EditTodoPage } from './edit/EditTodoPage';
import { HomePage } from './home/HomePage';
import { NewTodoPage } from './new/NewTodoPage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/new">
          <NewTodoPage />
        </Route>

        <Route path="/edit/:id">
          <EditTodoPage />
        </Route>

        <Route path="*">
          <p>Not Found</p>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export { App };
