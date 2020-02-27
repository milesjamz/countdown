import React from 'react';
import './App.css';
import Navbar from './navbar'
import Login from './login'
import Signup from './signup'
import Clock from './clock'
import Landing from './landing'
import Credits from './credits'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Route exact path='/clock' component={Clock} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/credits' component={Credits} />
      </header>
    </div>
  );
}

export default App;
