import React from 'react'
import Title from './../components/Title';
import { mockAccordionData } from '../data/mockData';

const FAQpage = () => {
   return (
      <section className="p-5">
         <Title title={'FAQ'} subtitle={'Frequently Asked Questions Page'} />
         <div className="flex flex-col gap-5">
            {mockAccordionData.map((item,index) => (
               <div key={849+index} className="p-5 bg-[--lightColor] text-[--whiteColor] rounded-lg text-sm md:text-lg">
                  <p className='text-[--greenColor] mb-2'>{item.question}</p>
                  <p>{item.details}</p>
               </div>
            ))}
         </div>
      </section>
   )
}

export default FAQpage
