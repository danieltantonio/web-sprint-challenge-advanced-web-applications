import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from './components/private/PrivateRoute';
import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path='/privateRoute' component={BubblePage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
