
import { Route,Routes} from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'

import Courses from './components/Courses/Courses'
import Signup from './components/Signup'

import Login from './components/Login'

// import useAuth from './context/AuthProvider'
import { useAuth } from './context/AuthProvider'
import { Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


const App = () => {
  const [isModalOpen,setIsModalOpen]=useState(false);
  const [authUser, setAuthUser] = useAuth();


  
  return (

     <>
    {/* <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />   */}
      <Routes>
        <Route path="/" element={<Home isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}/>
        <Route path="/course" element={authUser?<Courses isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>:<Navigate to="/"></Navigate>}/>
        <Route path="/signup" element={<Signup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}/>
      </Routes> 
      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> 
        <Toaster/> 
      </> 


    
  )
}

export default App
