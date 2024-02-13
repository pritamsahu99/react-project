import React, { useState } from 'react'

const Card = ({id, placeName, image, price, description, rmvTour}) => {
  
  const [readmore, setReadmore] = useState(false);
  function readmoreHandle(){
    setReadmore(!readmore);
  }
  const info = readmore ? description:`${description.substring(0, 200)}...`
  
  return (
    <div className='card p-2 rounded-md w-64 flex flex-col  bg-red-50 h-max shadow-md'>
      <img className='object-cover h-[250px] w-[15rem]' src={image} ></img>
      <p className='font-bold text-zinc-700 '>₹{price}-/</p>
      <p className='font-bold text-xl text-neutral-600'>{placeName}</p>
      <p className='text-[13px] font-medium opacity-90 pb-2'>{info} <span className='text-blue-700 hover:underline cursor-pointer font-normal' onClick={readmoreHandle}>
          {readmore ? `show less`:`show more`}
        </span>
      </p>
      <button className="relative py-1 border-[1px] border-green-400 bg-gradient-to-r from-green-100 via-transparent to-green-100 text-green-600 hover:text-green-700 shadow-inner md:shadow-md rounded-md overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-gradient-to-r hover:from-transparent hover:via-green-100 hover:to-transparent" onClick={()=>rmvTour(id)}>
        <span className="absolute left-0 w-16 h-full transition-transform duration-400 bg-gradient-to-r from-transparent via-green-100 to-transparent"></span>
         Not Interested
      </button>

    </div>
  )
}

export default Card;
