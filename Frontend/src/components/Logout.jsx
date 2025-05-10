import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        setAuthUser(undefined);
        localStorage.removeItem('Users');
        
        toast.success('Logout successful');
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
  return (
    <div >
      <button onClick={handleLogout} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ">
        Logout
        </button>
    </div>
  )
}

export default Logout
