import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Services from './Components/Services/Services';
import Contact from './Components/Pages/Contact';
import Myproject from './Components/Myproject/Myproject'
import Footer from './Components/Footer/Footer';
import Info from './Components/Info/Info';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/myproject" element={<Myproject/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Info/>
 
   

      <Myproject/>
      <About/>

      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
