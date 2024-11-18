import React from "react";
import ChartLine from "../pages/ChartLine";
import ChartBar from "../pages/ChartBar";
import { mockTransactions } from "./../data/mockData";
import Title from "./Title";
import ChartGeography from "../pages/ChartGeography";

const DashboardGraphs = () => {
  return (
    <section className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[--greenColor] text-xl mb-8">
      <ChartLine dashboardTrue={true} />
      <ul className="flex flex-col gap-1 h-96 overflow-y-auto text-white text-sm">
        <li className="bg-[--lightColor] p-3 py-4 text-xl">
          Recent Transactions
        </li>
        {mockTransactions.map((item, index) => (
          <li
            key={index + 59177}
            className="bg-[--lightColor] p-3 flex items-center justify-between"
          >
            <div className="flex flex-col gap-1 w-24">
              <p className="text-[--greenColor]">{item.txId}</p>
              <p>{item.user}</p>
            </div>
            <p>{item.date}</p>
            <button className="bg-[--greenColor] rounded-lg w-16 py-1 text-center">
              $ {item.cost}
            </button>
          </li>
        ))}
      </ul>
      <div className={`p-5 rounded-lg bg-[--lightColor]`}>
        <Title dashboardTrue={true} title={"Campaign"} />
        <ul className="flex flex-col gap-1  py-5 text-base text-center items-center">
          <svg width="160" height="160" className="rotate-90">
            <circle
              cx="80"
              cy="80"
              r={70}
              strokeWidth="12"
              stroke="#8884d8"
              fill="transparent"
            />
            <circle
              cx="80"
              cy="80"
              r={70}
              strokeWidth="12"
              stroke="#00C49F"
              fill="transparent"
              strokeDasharray={130 * Math.PI}
              strokeDashoffset={50 * Math.PI - (50 / 100) * 50 * Math.PI}
              className="transition-all duration-300"
            />
          </svg>
          <p className="text-[--greenColor]">$48,352 revenue generated</p>
          <p className="text-[--whiteColor]">
            Includes extra misc expenditures and costs
          </p>
        </ul>
      </div>
      <ChartBar dashboardTrue={true} />
      <ChartGeography dashboardTrue={true} />
    </section>
  );
};

export default DashboardGraphs;
