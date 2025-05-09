import React from 'react'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Login from './Login';

const Signup = ({isModalOpen,setIsModalOpen}) => {
  return (
    <div>
          <div class="login fixed bg-gray-100 flex md:w-100 w-1/1  z-3 items-center justify-center rounded-xl">
          <div class="max-w-md w-full bg-white rounded-xl shadow-lg px-8 py-4">
            <Link to="/"> <div className='w-full flex justify-end  text-2xl'><IoClose/></div>
            </Link>
            <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center ">Sign Up</h2>
            
            <form class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="name" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
        
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
        
              <div class="flex items-center justify-between">
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                  <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
        
              <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                Sign up
              </button>
            </form>
        
            <div class="mt-6 text-center text-sm text-gray-600">
              Have an account? 
            
            <a href="#" onClick={()=>{setIsModalOpen(true)}} class="text-indigo-600 hover:text-indigo-500 font-medium">Sign in</a>
            
              
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Signup
