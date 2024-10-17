import React, {useState, useEffect} from "react";

import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import LearningPath from "./pages/learningPath/LearningPath";

function App() {
  const[isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setIsSticky(true);
      } else {
        setIsSticky(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])
  return (
    <React.Fragment>
      <Navbar sticky={isSticky}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/learning-path' element={<LearningPath />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
