// Project: personal-website
// File Created: 2023-10-01
// Author: Arthur Nguyen (
//  
import './App.css'
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';
import ProfilePic from './components/ProfilePic.tsx';
import Introduction from './components/Introduction.tsx';
import About from './components/About.tsx';
import ProgressBar from './components/ProgressBar.tsx';


function App() {

  return (
    <>
      <Header />
      <Sidebar/>
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          <Introduction/>
          <About/>
        </div>
        <div className='hidden md:block'>
          <ProgressBar/>
          <ProfilePic/>
        </div>

      </div>


    </>
    
  );
}

export default App
