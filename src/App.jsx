import React, { useState } from 'react'
import data from "./Data";
import Tours from "./Tours";

const App = () => {
  
  const [tours, setTours] = useState(data);
  const rmvTour = ((id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  });

  if (tours.length === 0) {
    const mainDiv = document.querySelector(".mainDiv");
    if (mainDiv) {
      mainDiv.style.display = 'none';
    }
    return (
      <div className='h-screen bg-slate-50 flex justify-center items-center flex-col'>
        <h2 className='font-bold text-slate-700'>No Tours left</h2>
        <button className='bg-green-100 mt-1  px-6 rounded-sm border-[1px]' onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }
  
  return (
    <>
      <Tours tours={tours} rmvTour={rmvTour}></Tours>
      {/* <Item itemName={data[0].itemName} day={data[0].day} month={data[0].month} year={data[0].year}></Item> */}
    </>
  )
}

export default App;
