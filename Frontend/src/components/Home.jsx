import React from 'react'
import Navbar from './navbar';
import Banner from './Banner';
import Footer from './Footer';
import Freebook from './Freebook';

const Home = ({isModalOpen,setIsModalOpen}) => {
  return (
    <>
    <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    <Banner/>
    <Freebook/>
    <Footer/>
    </>
  )
}

export default Home
