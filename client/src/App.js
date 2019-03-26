import React,{Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/edit" component={Edit} />
        </div>
      </Router>
    );
  }
}

export default App;
