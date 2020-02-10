import React from 'react';
import './App.css';
import { FormContainer } from './components/FormContainer'
import { Home } from './components/Home'
import { Route } from 'react-router-dom'



const App = () => {
  return (
    <div className="App">
      <main>
        <div>
          <Route path="/" exact component={FormContainer} />
          <Route path='/home' exact component={Home} />
        </div>
      </main>
    </div>
  );
}

export default App;
