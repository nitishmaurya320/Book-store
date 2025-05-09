import React from 'react'

const Card = ({title,src,name,price,className=""}) => {
  return (
    <div>
        <div className={`cursor-pointer flex flex-col my-6 px-5 h-100  transform-transition hover:scale-102 duration-100 justify-center items-center bg-white shadow-sm  rounded-lg ${className} hover:shadow-lg `}>
  <div class="relative h-56 m-2.5 overflow-hidden   border  text-white rounded-md">
    <img class="transition-transform duration-500  ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" 
         src={src} alt="investment-seed-round" />
  </div>
  <div class="p-4">
    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
      {name}
    </h6>
    <p class="text-slate-600 leading-normal font-light">
      {title}
    </p>
  </div>
  <div class="px-4 pb-4 pt-0 mt-2 w-full flex justify-between   " >
    <div className=" text-slate-700 border rounded-3xl px-2 flex justify-center items-center">Rs {price}</div>
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Buy Now
    </button>
  </div>
</div> 
      
    </div>
  )
}

export default Card
