import React from 'react'
import Title from './../components/Title';
import { mockDataContacts } from '../data/mockData';

const Contacts = () => {
   return (
      <section className="p-5">
         <Title title={'CONTACTS'} subtitle={'List of Contacts for Future Reference'} />
         <div className={`overflow-x-auto w-full bg-[--lightColor] text-[--whiteColor] rounded-lg text-sm md:text-md`}>
         <table className={`w-full`}>
            <thead>
               <tr className={`text-nowrap text-left p-5 bg-[--violetColor] border-b border-b-[--darkColor]`}>
                  <th className='px-2 py-2 md:py-4 ps-4'>ID</th>
                  <th className='px-2 py-2 md:py-4'>Register ID</th>
                  <th className='px-2 py-2 md:py-4'>Name</th>
                  <th className='px-2 py-2 md:py-4'>Age</th>
                  <th className='px-2 py-2 md:py-4'>Phone Number</th>
                  <th className='px-2 py-2 md:py-4'>Email</th>
                  <th className='px-2 py-2 md:py-4'>Address</th>
                  <th className='px-2 py-2 md:py-4'>City</th>
                  <th className='px-2 py-2 md:py-4'>Zip Code</th>
               </tr>
            </thead>
            <tbody>
               {mockDataContacts.map((item,index) => (
                  <tr key={index+858} className={` text-nowrap border-b border-b-[--darkColor]`}>
                     <td className='px-2 py-2 md:py-4 ps-4'>{item.id}</td>
                     <td className='px-2 py-2 md:py-4'>{item.registrarId}</td>
                     <td className='px-2 py-2 md:py-4 text-[--greenColor]'>{item.name}</td>
                     <td className='px-2 py-2 md:py-4'>{item.age}</td>
                     <td className='px-2 py-2 md:py-4'>{item.phone}</td>
                     <td className='px-2 py-2 md:py-4'>{item.email}</td>
                     <td className='px-2 py-2 md:py-4'>{item.address}</td>
                     <td className='px-2 py-2 md:py-4'>{item.city}</td>
                     <td className='px-2 py-2 md:py-4'>{item.zipCode}</td>
                  </tr>
               ))}
            </tbody>
         </table>
         </div>
      </section>
   )
}

export default Contacts
