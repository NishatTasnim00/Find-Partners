import React from 'react'

const SingleCard = (title, des, dueDate, fees) => {
  return (
    <div className="relative">
    <div className="absolute footer-bg p-3 rounded-xl top-0 left-5">
      <span className="text-xl font-bold text-white ">1st</span>
    </div>
    <div className="shadow-md shadow-slate-400 px-6 py-12 lg:mx-10 rounded-xl ">
      <div className="text-center">
        <p className="text-lg font-bold">Commencement of business </p>
        <p className="font-semibold text-slate-500 mt-2">
          Invested shareholders must confirm payment and office address{" "}
        </p>
      </div>
      <div className="bg-slate-100 rounded-xl p-1 flex justify-between mt-4 lg:px-6 py-5">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-sky-600">Due date</p>
          <p>Within 30 days </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-red-600">Penalty fees</p>
          <p>₹50,000 for the company</p>
          <p>₹1,000 /day for directors</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SingleCard