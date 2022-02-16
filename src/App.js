// import React from 'react';

import About from "./component/About";
import "./App.css";

import Blog123 from "./component/Blog123";
import Contact from "./component/Contact";
import Blog from "./component/Blog";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Project from "./component/Project";
import Service from "./component/Service";
import About1 from "./component/About1";
import Slider from "./Slider";
// import Slider1 from "./pages/Slider1";




function App() {
  return (

    <div className="App">
      {/* <Slider1/> */}
      
       <Home />
      
       <About />
       <Slider /> 
       <About1 />
       <Service />
       <Project />
       <Blog />
       
      
       <Blog123/>
       <About1/>
     
       <Contact />
       
       <Footer />

    </div>
  );
}

export default App;
