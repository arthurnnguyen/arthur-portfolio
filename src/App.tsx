// Project: personal-website
// File Created: 2023-10-01
// Author: Arthur Nguyen (
//  
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects.tsx";
import Home from "./pages/Home.tsx";



function App() {

  return (
    <BrowserRouter>
      {/* nav here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
