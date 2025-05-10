import {React,use,useState} from 'react'
import { MdOutlineDarkMode } from "react-icons/md"; 
import { useEffect } from 'react';
import Login from './Login'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';


const Navbar = ({isModalOpen,setIsModalOpen}) => {
    const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  const menu=[{
    name:"Home",
    url:"/"
  },
  {
    name:"Courses",
    url:"/course"
  },{
    name:"Services",
    url:"/services"
  },
  {
    name:"Contact",
    url:"/contact"
  }
    
  
    
  ]
  const location = useLocation();
  const currentPath = location.pathname;
  const[menuColor,setMenuColor]=useState("blue");
  

    const [isopen, setIsOpen] = useState(false); 
    const [darkMode, setDarkMode] = useState(true);
    const [isscrolled, setIsScrolled] = useState(false);
    useEffect(() => {
            const handleScroll=()=>{    
                if(window.scrollY > 0){
                    setIsScrolled(true);
            }
            else{
                setIsScrolled(false);
            }
        }
            window.addEventListener('scroll',handleScroll);
            return () => window.removeEventListener('scroll',handleScroll);
    },[]);

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        console.log('dark mode')
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);   
  return (
    <div >
      <nav className={` dark:bg-gray-900 border   bg-white fixed w-full z-20 top-0 start-0 -b ${isscrolled ? "shadow-md":""}`}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4    ">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Book Store</span>
  </a>
  <div className='flex space-x-3 justify-center items-center md:order-5 '>
  <div onClick={() => setDarkMode(!darkMode) } className=" md:order-4 ">
  <MdOutlineDarkMode  className='text-2xl dark:text-white cursor-pointer'/>
  </div>
  <div className="flex md:order-5 space-x-3 md:space-x-0 rtl:space-x-reverse">
      {
        authUser ? <Logout/> :<button type="button" onClick={()=>{setIsModalOpen(true)}}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      }
      


      <button type="button"   onClick={()=>{setIsOpen(!isopen)} } className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  </div>
  
  
  <div  className={`items-center justify-between w-full md:flex space-x- l  md:w-auto md:order-2 ${
    isopen ? "block" : "hidden"
  }`} id="navbar-sticky">
   <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
   {
    menu.map((item)=>{
      return(
        <li>
           <Link
              to={item.url}
              className={`px-4 py-2 rounded ${
                currentPath === item.url ? 'text-blue-500' : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
        </li>
      )
    })
   }
   </ul>
  </div>
 
  <div className='md:order-3 hidden md:block '>
  <input type="text" id="search-navbar" className=" block w-full p-2 ps-10 text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search..."/>
  </div>
  
  </div>
</nav>
    {/* <Login  isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>   */}
    </div>
  )
}

export default Navbar


{/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
<li>
  <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
</li>
<li>
  <a href="/course" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Courses</a>
</li>
<li>
  <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
</li>
<li>
  <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
</li>
</ul> */}