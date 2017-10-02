import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/app';
import Author from './components/AuthorComponent/author';
import Posts from './components/PostsComponent/posts';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/author" name="author" component={Author}/>
          <Route path="/posts" name="posts" component={Posts}/>
          <Redirect path="*" to="/posts" />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  app
);
