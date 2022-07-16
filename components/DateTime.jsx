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
  console.log(d);
  const Day = d.getDay();
  const Month = d.getMonth();
  const dateToday = d.getDate();
  const Hour = d.getHours()%12;
  const Min = d.getMinutes();  
  console.log(Hour>12 ? `${Hour} AM`: `${Hour} PM`);
  console.log(Min);
  return (
    <>
      <h1>working!</h1>
      
    </>
  );
}
