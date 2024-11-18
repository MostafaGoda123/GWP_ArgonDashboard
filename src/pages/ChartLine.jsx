import React from 'react'
import Title from '../components/Title'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { mockLineData } from '../data/mockData'

const ChartLine = ({dashboardTrue}) => {
   return (
      <section className={`p-5 ${ dashboardTrue && 'bg-[--lightColor] rounded-lg md:col-span-2 h-96' }`}>
         <Title dashboardTrue={true} title={'Line Chart'} subtitle={'Simple Line Chart'} />
         <div className={`w-full  ${ dashboardTrue ? 'h-[35vh]' : "h-[70vh]" }`}>
            <ResponsiveContainer width="100%" height="100%">
               <LineChart
                  width={'100%'}
                  height={'100%'}
                  // data={mockLineData}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="x" allowDuplicatedCategory={false} />
               <YAxis />
               {/* <YAxis tick={{ fill: 'white' }} /> */}
               <Tooltip />
               <Legend />
               {mockLineData.map((dataset) => (
                  <Line
                  key={dataset.id}
                  type="monotone"
                  data={dataset.data}
                  dataKey="y"
                  name={dataset.id}
                  stroke={
                  dataset.id === 'japan' ? '#F47560' :
                  dataset.id === 'france' ? '#F1E15B' :
                  '#E8C1A0'
                  }
                  activeDot={{ r: 8 }}
                  />
               ))}
               </LineChart>
            </ResponsiveContainer>
         </div>
      </section>
   )
}

export default ChartLine
