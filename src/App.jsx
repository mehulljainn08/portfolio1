import React from 'react';
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Services from './Components/Services/Services';
import Contact from './Components/Contacts/Contact'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
     <Services></Services>
     <Contact></Contact>
  
    </div>
  );
};

export default App;