/**
 * @author Philip Van Raalte
 * @date 2017-12-19
 */
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Home from './pages/Home';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div id="site" className="site">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;