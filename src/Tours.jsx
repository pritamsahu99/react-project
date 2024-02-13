import React from 'react';
import Card from './Card';

const Tours = ({tours, rmvTour}) => {
  
    // const itemName = props.itemName
    // const day = props.day;
    // const month = props.month;
    // const year = props.year;
  return (
    <div className='mainDiv min-h-screen bg-red-100 pt-6'>
      {/* <p>{itemName}</p>
      <span>{day}</span>
      <span> {month}</span>
      <span> {year}</span> */}
      <h1 className='w-80 text-center bg-red-200 font-bold rounded-lg py-2 m-auto border-[1px] text-3xl border-red-500'>Plan With Me ❤️‍🔥</h1>
      <section className='w-3/4 gap-6 py-6 min-h-screen m-auto flex-row flex flex-wrap justify-center '>
        {
          tours.map((tour)=>{
            return <Card {...tour} key={tour.id} rmvTour={rmvTour}></Card>
          })
        }
      </section>
    </div>
  )
}

export default Tours;
