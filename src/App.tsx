import React from 'react';
import './App.css';
import { FormContainer } from './components/FormContainer'
import { LoginContainer } from './components/LoginContainer'
import { Home } from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



const App = () => {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/login' exact component={LoginContainer}/>
        <Route path='/' exact component={FormContainer} />
      </Switch>
      </Router>

    </div>
  );
}

export default App;
