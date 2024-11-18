import React from 'react'
import Title from '../components/Title'
import { mockDataInvoices } from '../data/mockData'

const Invoices = () => {
   return (
      <section className="p-5">
         <Title title={'INVOICES'} subtitle={'List of Invoice Balances'} />
         <div className={`overflow-x-auto w-full bg-[--lightColor] text-[--whiteColor] rounded-lg`}>
         <table className={`w-full`}>
            <thead>
               <tr className={`text-nowrap text-left p-5 bg-[--violetColor] border-b border-b-[--darkColor]`}>
                  <th className='px-2 py-2 md:py-4 ps-4'>ID</th>
                  <th className='px-2 py-2 md:py-4'>Name</th>
                  <th className='px-2 py-2 md:py-4'>Phone Number</th>
                  <th className='px-2 py-2 md:py-4'>Email</th>
                  <th className='px-2 py-2 md:py-4'>Cost</th>
                  <th className='px-2 py-2 md:py-4'>Date</th>
               </tr>
            </thead>
            <tbody>
               {mockDataInvoices.map((item,index) => (
                  <tr key={index+9696} className={`text-nowrap border-b border-b-[--darkColor]`}>
                     <td className='px-2 py-2 md:py-4 ps-4'>{item.id}</td>
                     <td className='px-2 py-2 md:py-4 text-[--greenColor]'>{item.name}</td>
                     <td className='px-2 py-2 md:py-4'>{item.phone}</td>
                     <td className='px-2 py-2 md:py-4'>{item.email}</td>
                     <td className='px-2 py-2 md:py-4 text-[--greenColor]'>${item.cost}</td>
                     <td className='px-2 py-2 md:py-4'>{item.date}</td>
                  </tr>
               ))}
            </tbody>
         </table>
         </div>
      </section>
   )
}

export default Invoices
