import React from 'react'
import JoinUsCard from './JoinUsCard';

const JoinUsSection = () => {
  return (
    <div>
        <h1 className='font-bold text-[65px] text-center'>Want to  Join Us?</h1>
        <p className="font-semibold text-slate-500 text-center">To remain with us, it is essential that you diligently follow the steps provided</p>    
           
            <div className="mt-20">
            <JoinUsCard />   
            </div>
            <p className="text-center mt-5 font-semibold">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className="text-lg font-bold">every day </span>until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
    
    </div>
  )
}

export default JoinUsSection;