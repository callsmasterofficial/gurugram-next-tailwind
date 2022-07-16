import React from 'react'
import Person from './icons/Person';
import Chat from './icons/Chat';
import Fire from './icons/Fire';
import Socials from './Socials';
import WeatherCard from './WeatherCard'
import MainRelatedPopularSidebar from './MainRelatedPopularSidebar'
import TazaKhabar from './TazaKhabar';

function TechAreaTile() {
  return (
    <div className="w-[80%] ninetyPercentWidth m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
  
    <div className="  m-auto text-xl font-semibold  mb-4 border-t-2 p-2 mt-24">
        <h1>Tech</h1>
    </div>
          <div className="TechTileArea m-auto ">
            <div className="md:grid md:grid-cols-1  lg:grid lg:grid-cols-3 border-2  p-4">
              <div className="col-span-1 lg:col-span-2 ">
                {TechAreaTileData.map((data) => {
                  return (
                    <div key={data.id} className=" mb-2">
                      <div className="grid  md:grid-cols-2">
                        <div className="overflow-hidden
                        w-[100%] h-[100%]  m-auto col-span-1">
                          <img
                            className="object-cover w-[100%] h-[100%]  mx-auto sm:mx-auto hover:scale-110  transition-all duration-300 ease-linear"
                            src={data.image}
                            alt="imge not found"
                          />
                        </div>
                        <div className="p-3 col-span-1 ">
                          <h4 className=" text-gray-400 text-xs">
                            <div className="flex">
                            <Person/>
                            <p className="mx-1 items-center">Pulkit Mittal</p>
                            <Chat/>
                            <p className="mx-1">0</p>
                            <Fire/>
                            <p className="mx-1">32</p>
                            </div>
                        
                            {/* {data.category} / {data.date} */}
                          </h4>
                          <h2 className="font-extrabold hover:text-blue-500 mt-3 mb-3">
                            {data.title}
                          </h2>
                          <p className="text-base mt-3 mb-3">{data.description}</p>
                          <button className="  hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-900 hover:border-transparent rounded bg-red-500 mt-4">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}{" "}
              </div>
                <div className="lg:col-span-1">
                  <div className='mt-10 mb-10'>
                 <Socials/>

                  </div>
                 <div className='mt-10 mb-10'>
                 <WeatherCard/>

                 </div>
                 <div className='mt-10 mb-10'>
                 <MainRelatedPopularSidebar/>

                 </div>
                 <div className='mt-10 mb-10'>
                 <TazaKhabar/>

                 </div>
              </div>

              {/* <div className="col-span-1 grid grid-cols-1 sm:grid-cols-1 ">
                 <SportsAreaCarousel/>
              </div>
              <div className="col-span-1 grid grid-cols-1 sm:grid-cols-1 ">
                 <NewsLetter/> 
                 <img src="./assets/images/ad/ad-3.png" /> 
              </div> */}
            </div>
            
          </div>
          </div>  );
}

export default TechAreaTile


const TechAreaTileData = [
    {
      id: "1",
      image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
      category: "Technology",
      date: "June 24, 2022",
      title: "Copa America: Luis Suarez from devastated US",
      description:
        "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    },
    {
        id: "2",
        image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "Copa America: Luis Suarez from devastated US",
        description:
          "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
      },
      {
        id: "3",
        image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "Copa America: Luis Suarez from devastated US",
        description:
          "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
      },    {
        id: "4",
        image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "Copa America: Luis Suarez from devastated US",
        description:
          "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
      },    
      {
        id: "5",
        image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "Copa America: Luis Suarez from devastated US",
        description:
          "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
      },
      {
        id: "6",
        image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "Copa America: Luis Suarez from devastated US",
        description:
          "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
      },
      {
        id: "7",
        image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "Copa America: Luis Suarez from devastated US",
        description:
          "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
      },
      {
        id: "8",
        image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "Copa America: Luis Suarez from devastated US",
        description:
          "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
      },
      {
        id: "9",
        image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "Copa America: Luis Suarez from devastated US",
        description:
          "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
      },
      {
        id: "10",
        image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "Copa America: Luis Suarez from devastated US",
        description:
          "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
      },
  ];
