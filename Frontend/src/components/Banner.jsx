import React from 'react'

const Banner = () => {
    return(
        <>
        <div className='max-w-screen  dark:bg-gray-700 h-full container mt-[70px]  mx-auto md:px-20 flex flex-col md:flex-row pb-10  border'>
            <div className='md:w-1/2 px-3 order-2 '>
                <div className='mt-10 md:mt-20 dark:text-white  space-y-12'>
                    <h1 className='text-4xl '>Hello, welcome here to learn something <span className='text-pink-500'>new Everyday!!!</span></h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tempor turpis, eget porttitor erat. Sed ante sem, imperdiet vitae elementum in, facilisis in felis. Sed molestie lectus neque, a molestie odio molestie in. Morbi ac neque odio. Proin eros lacus
                    </p>
                    <div>
                <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>   
                </div>

                </div>
                <button type="button"   className="text-white mt-5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Login</button>
 
                
            </div> 
            <div className='md:w-1/2 md:order-2 order-1 '>
                <img className='w-full h-full ' src="books.png"/>
            </div>
        </div>
        </>
    )

}
export default Banner
