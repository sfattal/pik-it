import React,{Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Create from './pages/Create'
import FAQ from './pages/FAQ'
import Admin from './pages/Admin'
import "./style.css"
import ParticipantSelection from './pages/ParticipantSelection'
import Results from './pages/Results'
import Thanks from './pages/Thanks'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/FAQ" component={FAQ} />
          <Route exact path="/polls/admin/:key" component={Admin} />
          <Route exact path="/polls/:key" component={ParticipantSelection} />
          <Route exact path="/thanks" component={Thanks} />
          <Route exact path="/results/:key" component={Results} />
        </div>
      </Router>
    );
  }
}

export default App;
