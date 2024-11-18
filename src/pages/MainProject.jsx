import React from 'react'
import Navbar from './../components/Navbar';
import Contacts from './Contacts';
import Invoices from './Invoices';
import ProfileForm from './ProfileForm';
import FAQpage from './FAQpage';
import ChartPie from './ChartPie';
import ChartBar from './ChartBar';
import ChartStream from './ChartStream';
import ChartGeography from './ChartGeography';
import Dashboard from './Dashboard';
import Team from './Team';
import { Route, Routes } from 'react-router-dom';
import ChartLine from './ChartLine';
import CalendarPage from './CalendarPage';

const MainProject = () => {
  return (
    <main className="flex-1 bg-[--darkColor] h-[100vh] overflow-y-auto">

      <Navbar />
      <Routes>
        <Route path={`/`} element={<Dashboard />} />
        <Route path={`/team`} element={<Team />} />
        <Route path={`/contacts`} element={<Contacts />} />
        <Route path={`/invoices`} element={<Invoices />} />
        <Route path={`/form`} element={<ProfileForm />} />
        <Route path={`/calendar`} element={<CalendarPage />} />
        <Route path={`/faq`} element={<FAQpage />} />
        <Route path={`/bar`} element={<ChartBar />} />
        <Route path={`/pie`} element={<ChartPie />} />
        <Route path={`/line`} element={<ChartLine />} />
        <Route path={`/geography`} element={<ChartGeography />} />
        <Route path={`/stream`} element={<ChartStream />} />
      </Routes>

    </main>
  )
}

export default MainProject
