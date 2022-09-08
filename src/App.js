import React from 'react';
import About from './components/about';
import Navigate from './components/nav';
import Projects from './components/projects'
import './App.css';

function App() {
  return (
    <div className="body">
      
      <div className='hero'>
        <header className='App-header'>
          <div className='left-nav'>
            <Navigate></Navigate>
          </div>
        </header>
        <div className='name-title'>
          <h1 className='name'>JAMES LITTON</h1>
          <h2 className='profession'>Web Developer</h2>
        </div>
      </div>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}


export default App;
