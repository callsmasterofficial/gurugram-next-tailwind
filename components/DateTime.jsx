import React from "react";

export default function DateTime() {
  const AllMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const AllDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const Day = d.getDay();
  const Month = d.getMonth();
  const dateToday = d.getDate();
  const Year = d.getFullYear();
  const H = d.getHours();
  const Min = d.getMinutes();  
  const TimeNow =(H<12 ? `${H}:${Min} AM`: `${H}:${Min} PM`);
  // Mon Jul 18 2022 11:32:08 GMT+0530 (India Standard Time)
  const CurrentDate = `${AllDays[Day]} ${AllMonths[Month]} ${dateToday} ${Year} ${TimeNow}`
  
  return (
    <>
      <p>{CurrentDate}</p>  
    </>
  );
}
