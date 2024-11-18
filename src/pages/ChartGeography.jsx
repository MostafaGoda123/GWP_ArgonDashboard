import React from "react";
import Title from "../components/Title";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoFeatures } from './../data/mockGeoFeatures';
import { scaleLinear } from "d3-scale";

const ChartGeography = ({ dashboardTrue }) => {

   const data = [
      { id: "USA", value: 331000000, name: "United States" },
      { id: "CHN", value: 1444216107, name: "China" },
      { id: "IND", value: 1393409038, name: "India" },
      { id: "BRA", value: 213993437, name: "Brazil" },
      { id: "RUS", value: 145912025, name: "Russia" },
      // Add more countries as needed
   ];
   const colorScale = scaleLinear()
  .domain([0, 1500000000]) // Domain (data range)
  .range(["#e0f7fa", "#006064"]); // Range (light to dark colors)

  // Function to find country data by ISO3 code
   const getCountryData = (geo) => {
      return data.find((item) => item.id === geo.properties.ISO_A3);
   };

   return (
      <section className={`p-5 ${ dashboardTrue && 'bg-[--lightColor] rounded-lg h-96' } `}>
         <Title dashboardTrue={true} title={'Geography'} subtitle={'Simple Geography Chart'} />
         <div className={`w-full ${ dashboardTrue ? 'h-[35vh] text-lg' : "h-96 md:h-[70vh]" }`}>
         <ComposableMap
         projection="geoMercator"
         style={{ width: "100%", height: "100%" }}
         >
         <Geographies geography={geoFeatures}>
            {({ geographies }) =>
            geographies.map((geo) => {
               const countryData = getCountryData(geo);
               return (
               <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                     default: {
                     fill: countryData
                        ? colorScale(countryData.value)
                        : "#d6d6d6", // Default color for countries without data
                        outline: "none",
                     },
                     hover: {
                        fill: "#f50057", // Highlight color on hover
                        outline: "none",
                     },
                     pressed: {
                        fill: "#ff5722", // Clicked color
                        outline: "none",
                     },
                  }}
                  />
               );
            })
            }
      </Geographies>
      </ComposableMap>
      
         </div>
      </section>
   )
}

export default ChartGeography


