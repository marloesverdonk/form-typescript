import React from 'react';
import './App.css';
import { FormContainer } from './components/FormContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home' exact component={FormContainer} />
          <Route path='/login' exact component={FormContainer} />
          <Route path='/' exact component={FormContainer} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

