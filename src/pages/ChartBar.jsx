import React from 'react'
import Title from './../components/Title';
import { mockBarData } from '../data/mockData';
import { Bar, BarChart, Tooltip , CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const ChartBar = ({ dashboardTrue }) => {

   return (
      <section className={`p-5 ${ dashboardTrue && 'bg-[--lightColor] rounded-lg h-96' }`}>
         <Title dashboardTrue={true} title={'Bar Chart'} subtitle={'Simple Bar Chart'} />
         <div className={`w-full ${ dashboardTrue ? 'h-[35vh] text-lg' : "h-96 md:h-[70vh]" }`}>
         <ResponsiveContainer width="100%" height="100%">
            <BarChart
               width={'100%'}
               height={'100%'}
               data={mockBarData}
               margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" label={{ value: 'Country' }} />
               <YAxis label={{ value: 'Food', angle: -90, position: 'insideLeft' }} domain={[0 , 450 ]}  />
               <Tooltip />
               { !dashboardTrue && <Legend verticalAlign='top' height={40} /> }
               <Bar dataKey="hot dog" stackId="a" fill="#E8C1A0" />
               <Bar dataKey="burger" stackId="a" fill="#F47560" />
               <Bar dataKey="kebab" stackId="a" fill="#E8A838" />
               <Bar dataKey="donut" stackId="a" fill="#97E3D5" />
            </BarChart>
         </ResponsiveContainer>
         </div>
      </section>
   )
}

export default ChartBar
