
import React from 'react';
import './App.css';
import Navbar from './Navbar'
import About from './about'
import Services from './services';
import Work from './work';
import Contact from './contact';
import Experience from './experience'
import Card from './card';
// import Card from './card';

export default function App() {
  return (
    <div className="container">
      <Navbar/>
      <About/>
      <Card/>
      <Experience/>
      <Services/>
      <Work/>
      <Contact/>
    </div>
  )
}


