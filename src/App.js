import React, {Component} from 'react';
import Characters from './components/Characters';
import OneCharacterInfo from './components/OneCharacterInfo';
import { Switch, Route } from "react-router";
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route exact path="/oneCharacterInfo/:name" component={OneCharacterInfo} />
      </Switch>
    );
  }
}

export default App;