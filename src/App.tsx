// Project: personal-website
// File Created: 2023-10-01
// Author: Arthur Nguyen (
//  
import './App.css'
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';
import ProfilePic from './components/ProfilePic.tsx';
import Introduction from './components/Introduction.tsx';
import About from './components/About.tsx';
import ProgressBar from './components/ProgressBar.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Sidebar />

      <div className="ml-[90px]">
        <Routes>
          {/* Home route ("/") shows Introduction + About + Profile/Progress */}
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-2">
                <div className="col-span-1">
                  <Introduction />
                  <About />
                </div>
                <div className="hidden md:block">
                  <ProgressBar />
                  <ProfilePic />
                </div>
              </div>
            }
          />

          {/* Projects route ("/projects") shows your Projects.tsx component */}
          <Route
            path="/projects"
            element={<Projects />}
          />

          {/* (Optional) add more routes here, e.g. <Route path="/about" …> */}
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
