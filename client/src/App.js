import React,{Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Create from "./pages/Create"
import Edit from "./pages/Edit"
import Header from './components/Header'
import Wrapper from "./components/Wrapper";

import './App.css';


class App extends Component {
  render() {
    return (
      <Router> 
      <div>
        <Header />
        <Wrapper> 
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/edit" component={Edit} />
        </Wrapper>
      </div>
      </Router>
    );
  }
}

export default App;
