import React from 'react'
import List from '../../public/List.json'
import Card from './Card'
import {Link} from 'react-router-dom'

const Course = () => {
  return (
    <>
    <div className='max-w-screen container mx-auto md:px-20 px-4 mt-[71px] dark:bg-gray-700 dark:text-white text-black'>
        <div className='flex flex-col justify-center items-center py-10   '>
            <h1 className='md:text-4xl text-2xl'>We are delighted to you have <span className='text-pink-500'>here!</span></h1>
        <p className='mt-10 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus accusamus accusantium
sed architecto odio, nisi expedita quas quidem nesciunt debitis dolore non aspernatur praesentium assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat
amet animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam consequatur! </p>
<Link to='/'>
<button type="button"   className="text-white mt-5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Back    </button>

</Link>
        </div>
        <div className='grid grid-col  md:grid-cols-4'>
            {
                List.map((item)=>{
                    return(<Card  className="md:w-80 w-[100%]" name={item.name} price={item.price} title={item.title} src={item.image}/>)
                })
            }
        </div>
      
      </div>
    </>
  )
}

export default Course
