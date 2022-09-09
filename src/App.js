import React from 'react';
import About from './components/about';
import Navigate from './components/nav';
import Projects from './components/projects'
import './App.css';

function App() {
  return (
    <div className="body">
      <div className='hero'>
          <h1 className='welcome'>Welcome</h1>
          <Navigate></Navigate>
      </div>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}


export default App;
