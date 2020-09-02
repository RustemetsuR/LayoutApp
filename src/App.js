import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Page from './containers/Page/Page';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/about" component={Page} />
      <Route path="/contacts" component={Page} />
      <Route path="/divisions" component={Page} />
      <Route path="/admin" component={Page} />
      <Route path="/home" exact component={Page} />
    </Switch>
  </Layout>
);

export default App;
