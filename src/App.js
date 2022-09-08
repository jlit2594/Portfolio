import React from 'react';
import About from './components/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>James Litton</h1>
        <Nav></Nav>
      </header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
