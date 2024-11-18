import React from 'react'
import Title from './../components/Title';
import { Area,Tooltip, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { mockStreamData } from '../data/mockData';

const ChartStream = () => {
   return (
      <section className="p-5">
         <Title title={'Stream Chart'} subtitle={'Simple Stream Chart'} />
         <div className="w-full h-[70vh]">
            <ResponsiveContainer>
               <AreaChart
                  data={mockStreamData}
                  // margin={{
                  // top: 10,
                  // right: 30,
                  // left: 0,
                  // bottom: 0,
                  // }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="Jacques" stroke="#83C5BC" fill="#83C5BC" fillOpacity={1} />
                  <Area type="monotone" dataKey="Paul" stroke="#55B2A6" fill="#55B2A6" fillOpacity={1} />
                  <Area type="monotone" dataKey="René" stroke="#C89336" fill="#C89336" fillOpacity={0.8} />
                  <Area type="monotone" dataKey="Marcel" stroke="#D0C354" fill="#D0C354" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="Josiane" stroke="#D26758" fill="#D26758" fillOpacity={0.4} />
                  <Area type="monotone" dataKey="Raoul" stroke="#C8A88F" fill="#C8A88F" fillOpacity={0.2} />
               </AreaChart>
            </ResponsiveContainer>
         </div>
      </section>
   )
}

export default ChartStream
