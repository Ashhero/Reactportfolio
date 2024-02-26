
import React from 'react';
import './App.css';
import Navbar from './Navbar'
import About from './about'
import Services from './services';
import Work from './work';
import Contact from './contact';

export default function App() {
  return (
    <div className="container">
      <Navbar/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
    </div>
  )
}


