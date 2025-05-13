import React from 'react'
import List from '../../public/List.json'
import Slider from "react-slick";
import Card from './Card';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Freebook = () => {
     const [book, setBook] = useState([]);
     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://book-store-6-jshw.onrender.com/book'); // Use axios to fetch data
                setBook(response.data); // Set the data from the response
                console.log(response.data); // Log the data for debugging
            } catch (error) {
                console.error("Error fetching data:", error); // Handle any errors
            }
        };
        fetchData();
    }
    , []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              centerMode: true ,
              centerPadding: "20px",
            }
          }
        ]
      };
    
    const filterdata=book.filter((items)=>items.category==="free");
    console.log(filterdata)
    
  return (
    <>
    <div className='max-w-screen mx-auto md:px-20 px-3  h-[800px] bg-white dark:bg-gray-600 dark:text-white'>
        <h1 className='font-semibold md:pt-10 pt-4  text-[20px]'>Free offered courses</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tempor turpis, eget porttitor erat. Sed ante sem, imperdiet vitae elementum in, facilisis in felis. Sed molestie lectus</p>
       
          <Slider {...settings}>
          
       {
          
              filterdata.map((item,index)=>{
                return(<Card className="md:w-96 w-[100%] space-x-2" name={item.name} price={item.price} category={item.category} title={item.title} src={item.image}/>   

                )
            })
          
        }
       
    </Slider>
    </div>
    </>
  )
}

export default Freebook
