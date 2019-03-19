import React,{Component } from 'react';
import Header from './components/Header'
import Form from './components/form'
import './App.css';
import Container from './components/Container/index'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Form />
        </Container>
        
      </div>
    );
  }
}

export default App;
