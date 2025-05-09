import React from 'react'
import List from '../../public/List.json'
import Slider from "react-slick";
import Card from './Card';

const Freebook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
    
    const filterdata=List.filter((items)=>items.category==="free");
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
