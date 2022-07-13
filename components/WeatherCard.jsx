import React, { useState, memo } from "react";
import axios from "axios";
import { useEffect } from "react";

function WeatherCard() {
  const [city, setCity] = useState([]);
  // const URL = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=2052b959123fe41f523a86ea1ab6b10b&units=metric`;

//   useEffect(() => {
//     axios.get(URL).then((response) => setCity(response.data));
//   }, [city]);

  // const handleClick= async (e)=>{
  //   e.preventDefault();
  //   const URL = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=2052b959123fe41f523a86ea1ab6b10b&units=metric`;
  //   const req = axios.get(URL);
  //   const res = await req;
  //   setCity(res.data);

  // }
  console.log(city);
  return (
    <>
      <div className=" text-white mx-6 my-2 md:mx-6" >
        <div className="bg-[#16b9f4] rounded-lg p-3 w-auto	">
          {/* <div className=" col-span-2 text-3xl">
          <div className=" col-span-1 text-3xl">Weather</div>
          <div className=" col-span-1 text-3xl">Weather</div>
          </div> */}
          <div className="col-span-2 flex justify-around	">
            <div className=" col-span-1">
              <div className=" text-3xl">Weather</div>
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

            {/* <div className="col-span-1">
              <ul>
                <li>
                  <img
                    className=""
                    src="https://img.icons8.com/color/2x/partly-cloudy-day--v2.png"
                    alt="Image not found"
                  />
                </li>
                <li>31%</li>
                <li>Humidity</li>
              </ul>
            </div>
            <div className=" col-span-1">
              <ul>
                <li>
                  <img
                    className=""
                    src="https://img.icons8.com/color/2x/partly-cloudy-rain--v2.png"
                    alt="Image not found"
                  />
                </li>
                <li>93%</li>
                <li>Rainy-Cloudy</li>
              </ul>
            </div> */}
          </div>

          <div className="flex justify-evenly mt-10 	">
            <div className="col-span-1">
              <img
                src="https://img.icons8.com/color/2x/partly-cloudy-rain--v2.png"
                alt="Image not found"
              />
              {/* <div className="text-white">{city.name}</div> */}
              <div className="text-white text-3xl">Delhi</div>
              <div className="text-white">Mist</div>
            </div>
            <div className="col-span-1">
              <ul>
                {/* <li>Tomorrow</li> */}
                {/* <li>{city.data.main.temp}</li> */}
                {/* <li className="text-white">{Math.floor(city.main?.temp - 273.15)}</li> */}

                {/* <li className="text-white">{city.main?.temp}</li> */}
                <li className="text-white text-6xl	">37<sup>o</sup><span className="text-2xl">C</span></li>
                
                <li className="text-white">37-42</li>
                <li className="text-white">41%</li>
                <li className="text-white">3.09 Km/h</li>

                {/* <li className="text-white">{city.weather?.[0].description}</li> */}
              </ul>
            </div>
          </div>
          <div className="col-span-5 flex justify-evenly mt-10 p-2.5">
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
            {/* <div className="col-span-1">
              <ul>
                <li>
                  <img
                    className=""
                    src="https://img.icons8.com/color/2x/partly-cloudy-day--v2.png"
                    alt="Image not found"
                  />
                </li>
                <li>31%</li>
                <li>Humidity</li>
              </ul>
            </div>
            <div className=" col-span-1">
              <ul>
                <li>
                  <img
                    className=""
                    src="https://img.icons8.com/color/2x/partly-cloudy-rain--v2.png"
                    alt="Image not found"
                  />
                </li>
                <li>93%</li>
                <li>Rainy-Cloudy</li>
              </ul>
            </div> */}
          </div>
          {/* <input  className="text-black"  value={city} onChange={(e)=>{
            setCity(e.target.value);
          }}/> */}
          {/* <button className="bg-red-400 m-4 p-4 rounded-md" >Get Temperature</button> */}
        </div>
        {/* {WeekData.map((data) => {
          return (
            <div
              key={data.id}
              className="bg-blue-700  col-span-3 flex justify-evenly"
            >
              <div className=" col-span-1">
                <ul>
                  <li>{data.day}</li>
                </ul>
              </div>
              <div className="col-span-1">
                <ul>
                  <li>{data.season}</li>
                </ul>
              </div>
              <div className=" col-span-1">
                <ul>
                  <li>{data.temprature}</li>
                </ul>
              </div>
            </div>
          );
        })} */}
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
