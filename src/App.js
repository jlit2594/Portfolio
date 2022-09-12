import React from 'react';
import About from './components/about';
import Navigate from './components/nav';
import Projects from './components/projects'
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="body">
      <div className='hero' alt="Image is a synthwave styled palm tree with a green sunset in the background.">
      {/* Image source is 'https://steamcommunity.com/sharedfiles/filedetails/?l=latam&id=2443460498'  */}
          <h1 className='welcome'>Welcome</h1>
          <Navigate></Navigate>
      </div>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </div>
  );
}


export default App;
