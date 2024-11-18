import React from 'react'
import Title from './../components/Title';
import { Cell, Pie, PieChart, Legend } from 'recharts';
import { mockPieData } from '../data/mockData';

const ChartPie = () => {

   const COLORS = ['#E8C1A0' , '#F47560' , '#F1E15B' , '#E8A838' , '#97E3D5'];
   const customLegendData = mockPieData.map((entry, index) => ({
      value: `${entry.label}`,  // Label with name and value
      type: "circle",                           // Icon type (e.g., circle, square, rect)
      color: COLORS[index % COLORS.length],     // Color for each legend item
    }));

   return (
      <section className="p-5">
         <Title title={'Pie Chart'} subtitle={'Simple Pie Chart'} />
         <div className="w-full h-[70vh] flex items-center justify-center">
         <PieChart width={500} height={500} >
         <Legend layout="horizontal" verticalAlign="bottom" align="center" payload={ customLegendData }/>
         <Pie
            data={mockPieData}
            cx={'50%'}
            cy={'50%'}
            innerRadius={100}
            outerRadius={200}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
         > 
            {mockPieData.map((entry, index) => (
               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
         </Pie>
      </PieChart>
         </div>
      </section>
   )
}

export default ChartPie
