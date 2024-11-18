import React from 'react'
import Title from './../components/Title';
import { mockDataTeam } from './../data/mockData';

const Team = () => {
   return (
      <section className="p-5">
         <Title title={'TEAM'} subtitle={'Managing the Team Members'} />
         <div className={`overflow-x-auto w-full bg-[--lightColor] text-[--whiteColor] rounded-lg`}>
         <table className={`w-full`}>
            <thead>
               <tr className={`text-nowrap text-left p-5 bg-[--violetColor] border-b border-b-[--darkColor]`}>
                  <th className='px-2 py-2 md:py-4 ps-4'>ID</th>
                  <th className='px-2 py-2 md:py-4'>Name</th>
                  <th className='px-2 py-2 md:py-4'>Age</th>
                  <th className='px-2 py-2 md:py-4'>Phone Number</th>
                  <th className='px-2 py-2 md:py-4'>Email</th>
                  <th className='px-2 py-2 md:py-4'>Access Level</th>
               </tr>
            </thead>
            <tbody>
               {mockDataTeam.map((item,index) => (
                  <tr key={index+56512} className={`text-nowrap border-b border-b-[--darkColor]`}>
                     <td className='px-2 py-2 md:py-4 ps-4'>{item.id}</td>
                     <td className='px-2 py-2 md:py-4 text-[--greenColor]'>{item.name}</td>
                     <td className='px-2 py-2 md:py-4'>{item.age}</td>
                     <td className='px-2 py-2 md:py-4'>{item.phone}</td>
                     <td className='px-2 py-2 md:py-4'>{item.email}</td>
                     <td className='px-2 py-2 md:py-4'><p className="text-[--lightColor] bg-[--greenColor] px-2 py-1 w-24 text-center  rounded-lg">{item.access}</p></td>
                  </tr>
               ))}
            </tbody>
         </table>
         </div>
      </section>
   )
}

export default Team
