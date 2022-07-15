import React, { useState, memo } from "react";
import axios from "axios";
import { useEffect } from "react";

function WeatherCard() {
  const [city, setCity] = useState([]);
  console.log(city);
  return (
    <>
      <div className=" text-white  my-2 md:mx-6" >
        <div className="bg-[#16b9f4]  p-3 w-auto	">
          <div className="col-span-2 flex justify-around	">
            <div className=" col-span-1">
              <div className=" text-2xl">Weather</div>
            </div>
            <div className=" col-span-1">
              <div className="w-[40px]">
                <img
                  className=""
                  src="https://img.icons8.com/color/2x/partly-cloudy-day--v2.png"
                  alt="Image not found"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-evenly mt-8	">
            <div className="col-span-1">
              <img
                src="https://img.icons8.com/color/2x/partly-cloudy-rain--v2.png"
                alt="Image not found"
              />
              <div className="text-white text-3xl text-center	">Delhi</div>
              <div className="text-white text-center	">Mist</div>
            </div>
            <div className="col-span-1 mt-4 text-center">
              <ul>

                <li className="text-white text-5xl	">37<sup>o</sup><span className="text-2xl">C</span></li>
                
                <li className="text-white mt-2">37-42</li>
                <li className="text-white">41%</li>
                <li className="text-white">3.09 Km/h</li>

              </ul>
            </div>
          </div>
          {/* <div className="col-span-5 flex justify-evenly mt-10 p-2.5">
            <div className=" col-span-1">
              <div className="w-[40px]">
                <img
                  className=""
                  src="https://img.icons8.com/color/2x/windy-weather--v2.png"
                  alt="Image not found"
                />
              </div>
              <div className="text-sm">
                <p>9 km/h</p>
                <p>Wind</p>
              </div>
            </div>
            <div className=" col-span-1">
              <div className="w-[40px]">
                <img
                  className=""
                  src="https://img.icons8.com/color/2x/partly-cloudy-day--v2.png"
                  alt="Image not found"
                />
              </div>
              <div className="text-sm">
                <p>9 km/h</p>
                <p>Wind</p>
              </div>
            </div>
            <div className=" col-span-1">
              <div className="w-[40px]">
                <img
                  className=""
                  src="https://img.icons8.com/color/2x/partly-cloudy-rain--v2.png"
                  alt="Image not found"
                />
              </div>
              <div className="text-sm">
                <p>9 km/h</p>
                <p>Wind</p>
              </div>
            </div>
            <div className=" col-span-1">
              <div className="w-[40px]">
                <img
                  className=""
                  src="https://img.icons8.com/color/2x/windy-weather--v2.png"
                  alt="Image not found"
                />
              </div>
              <div className="text-sm">
                <p>9 km/h</p>
                <p>Wind</p>
              </div>
            </div>
            <div className=" col-span-1">
              <div className="w-[40px]">
                <img
                  className=""
                  src="https://img.icons8.com/color/2x/windy-weather--v2.png"
                  alt="Image not found"
                />
              </div>
              <div className="text-sm">
                <p>9 km/h</p>
                <p>Wind</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default memo(WeatherCard);

const WeekData = [
  {
    id: "1",
    day: "MON",
    season: "Rainy",
    temprature: "+20",
  },
  {
    id: "2",
    day: "TUE",
    season: "Rainy",
    temprature: "+20",
  },
  {
    id: "3",
    day: "WED",
    season: "Rainy",
    temprature: "+20",
  },
  {
    id: "4",
    day: "THU",
    season: "Rainy",
    temprature: "+20",
  },
  {
    id: "5",
    day: "FRI",
    season: "Rainy",
    temprature: "+20",
  },
  {
    id: "6",
    day: "SAT",
    season: "Rainy",
    temprature: "+20",
  },
  {
    id: "7",
    day: "SUT",
    season: "Rainy",
    temprature: "+20",
  },
];
