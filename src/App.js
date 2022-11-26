import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './components/about';
import Navigate from './components/nav';
import Projects from './components/projects'
import Footer from './components/footer';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className='body'>
          <div className='nav'>
            <h1>James Litton</h1>
            <Navigate />
          </div>
          <div className='main-section'>
            <Routes>
              <Route
                path="/"
                element={<About />}
              />
              <Route
                path="/projects"
                element={<Projects />}
              />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>  
  );
}


export default App;
