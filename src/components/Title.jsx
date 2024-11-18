import React from 'react'

const Title = ({ title , subtitle , dashboardTrue }) => {
   return (
      <div>
         <h1 className={`uppercase font-semibold mb-1 text-[--whiteColor] ${dashboardTrue ? "text-lg" : 'text-2xl md:text-4xl'}`}>{title}</h1>
         <p className={`${dashboardTrue ? "text-base" : 'text-md md:text-lg'} text-[--greenColor] mb-8`}>{subtitle}</p>
      </div>
   )
}

export default Title
