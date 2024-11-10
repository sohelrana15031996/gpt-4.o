import React from 'react';
import './App.css';
import {Brand, Cta, Navbar} from './Components';
import {Blog, Features, Footer, Possibilities, Header, Whatgpt} from './Containers'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <Whatgpt/>
      <Features/>
      <Possibilities/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default App;