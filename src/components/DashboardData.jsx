import React from 'react'
import { FaEnvelope, FaTrafficLight, FaUserPlus } from 'react-icons/fa'
import { IoPhonePortrait } from 'react-icons/io5'

const DashboardData = () => {

   let data = [
      { icon : <FaEnvelope /> , number : '11,361' , title : "Email Sent" , percent : 28 },
      { icon : <IoPhonePortrait /> , number : '431,225' , title : "Sales Obtained" , percent : 41 },
      { icon : <FaUserPlus /> , number : '32,441' , title : "New Clients" , percent : 10 },
      { icon : <FaTrafficLight /> , number : '1,325,134' , title : "Traffic Received" , percent : 73 },
   ]

   return (
      <section className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-[--greenColor] text-xl mb-8">
         {data.map((item,index) => (
            <div key={index+95864} className="flex items-center justify-between bg-[--lightColor] rounded-lg p-5">
               <div className="flex flex-col gap-2">
                  {item.icon}
                  <h3 className='text-[--whiteColor] p-0 m-0 font-semibold'>{item.number}</h3>
                  <p>{item.title}</p>
               </div>
               <div className="flex flex-col gap-2 items-center">
                  <svg width="60" height="60" className="rotate-90">
                     <circle cx="30" cy="30" r={25} strokeWidth="5" stroke="#00C49F" fill="transparent" />
                     <circle cx="30" cy="30" r={25} strokeWidth="5" stroke="#8884d8" fill="transparent" strokeDasharray={50*Math.PI} strokeDashoffset={50*Math.PI - (item.percent / 100) * 50*Math.PI} className="transition-all duration-300"   />
                  </svg>
                  <p>{item.percent}%</p>
               </div>
            </div>
         ))}
      </section>
   )
}

export default DashboardData
