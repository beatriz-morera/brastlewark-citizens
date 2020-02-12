import React from 'react';
import { HashRouter, Switch, Link, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';

import CitizensProvider from './components/CitizensProvider';

const App = () => {
  return (
    <CitizensProvider>
      <HashRouter>
        <header className="navigation">
          <Link to="/home">
            <h1 className="page-title">BRASTLEWARK</h1>
          </Link>
          <ul className="navigation-items">
            <li>
              <Link to="/home" className="navigation-elements">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/search" className="navigation-elements">
                SEARCH
              </Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/search" component={Search} exact={true} />
          <Route path="/search/:id" component={Detail} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </Switch>
      </HashRouter>
    </CitizensProvider>
  );
};

export default App;
