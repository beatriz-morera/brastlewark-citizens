import React from 'react';
import { HashRouter, Switch, Link, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';

import CitizensProvider from './components/CitizensProvider';

const App = () => (
  <CitizensProvider>
    <HashRouter>
      <header className="navigation" data-testid="header">
        <Link to="/home" data-testid="home-link">
          <h1 className="page-title">BRASTLEWARK</h1>
        </Link>
        <ul className="navigation-items">
          <li>
            <Link to="/home" className="navigation-elements">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/search" className="navigation-elements" data-testid="search-link">
              SEARCH
            </Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/search/:id" component={Detail} />
        <Route path="/" render={() => <Redirect to="/home" />} exact />
      </Switch>
    </HashRouter>
  </CitizensProvider>
);

export default App;
