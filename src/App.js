import React, { Component } from 'react';
import { HashRouter as Router, Route,Switch ,Redirect} from "react-router-dom";
import './App.css';
import Head from './head.png';
import List from './components/list';
import Detail from './components/detail';

class App extends Component {
 
  render() {

    return (
      <Router>
      <div className="App">
        <div className="header">
          <img src={Head} alt="header"/>
        </div>
       
       <Switch> 
          <Route path="/list" component={List}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Redirect exact path="/" to="/list" />
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
