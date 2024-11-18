import React from 'react'
import Title from './../components/Title';
import DashboardData from './../components/DashboardData';
import DashboardGraphs from '../components/DashboardGraphs';
import { FaDownload } from 'react-icons/fa';

const Dashboard = () => {
   return (
      <section className="p-5">
         <div className="flex items-center justify-between">
            <Title title={'DASHBOARD'} subtitle={'Welcome to your dashboard'} />
            <button className='bg-[--violetColor] text-base md:text-xl py-2 px-4 rounded-lg text-[--whiteColor] flex items-center gap-2'><FaDownload /><span>Download Reports</span></button>
         </div>
         <DashboardData />
         <DashboardGraphs  />
      </section>
   )
}

export default Dashboard
