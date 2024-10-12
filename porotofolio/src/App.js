import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Services from './Components/Services/Services';
import Contact from './Components/Pages/Contact';
import Myproject from './Components/Myproject/Myproject';
import Footer from './Components/Footer/Footer';
import Info from './Components/Info/Info';
import Skill from './Components/skill/skill';
// Optional: Create a NotFound component

function App() {
  return (
    <div>
      <Navbar />
      {/* Conditional Rendering for Home */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/myproject" element={<Myproject />} />
        <Route path="/contact" element={<Contact />} />
        {/* Redirect to home if route not found */}
        
      </Routes>
      
      {/* Components that should be displayed on all pages */}
      <Info />
      <Skill />
      <Myproject/>
      <Footer />
    </div>
  );
}

export default App;
