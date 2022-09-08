import React from 'react';
import About from './components/about';
import Navigate from './components/nav';
import Projects from './components/projects'
import './App.css';

function App() {
  return (
    <div className="body">
      <header className='App-header'>
        <div className='left-nav'>
          <h1 className='name'>James Litton</h1>
          <Navigate></Navigate>
        </div>
        <div>

        </div>
      </header>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
