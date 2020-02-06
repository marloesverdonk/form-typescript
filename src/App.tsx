import React from 'react';
import './App.css';
import FormContainer from './components/FormContainer'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sign up</h1>
      </header>
      <main>
        <FormContainer/>
      </main>
    </div>
  );
}

export default App;
