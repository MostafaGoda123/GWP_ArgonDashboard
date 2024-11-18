import React, { useState } from 'react'
import Title from '../components/Title'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./CalendarEvents";
import "react-big-calendar/lib/css/react-big-calendar.css";


const CalendarPage = () => {

   moment.locale("en-GB");
   const localizer = momentLocalizer(moment);
   const [eventsData, setEventsData] = useState(events);
   // console.log(events);

   const handleSelect = ({ start, end }) => {
      console.log(start);
      console.log(end);
      const title = window.prompt("New Event name");
      if (title)
         setEventsData([
         ...eventsData,
         {
            start,
            end,
            title
         }
         ]);
   };

   return (
      <section className="p-5">
         <Title title={'Calendar'} subtitle={'Full Calendar Interactive Page'} />
         <Calendar
            className={`text-[--whiteColor] text-sm`}
            // views={["day", "agenda", "work_week", "month"]}
            views={[ "month" , "week" , "day" , "agenda" ]}
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={eventsData}
            style={{ height: "100vh" }}
            onSelectEvent={(event) => alert(event.title)}
            onSelectSlot={handleSelect}
         />
      </section>
   )
}

export default CalendarPage
