import React from 'react'
import { Route,Routes} from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Course from './components/Course'
import Courses from './components/Courses/Courses'
import Signup from './components/Signup'
import Navbar from './components/navbar'
import Login from './components/Login'


const App = () => {
  const [isModalOpen,setIsModalOpen]=useState(false);
  

  
  return (
     <>
    {/* <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />   */}
      <Routes>
        <Route path="/" element={<Home isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}/>
        <Route path="/course" element={<Courses isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}/>
        <Route path="/signup" element={<Signup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}/>
      </Routes> 
      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />  
      </> 


    
  )
}

export default App
