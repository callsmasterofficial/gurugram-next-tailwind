import React from 'react'
import Person from './icons/Person';
import Chat from './icons/Chat';
import Fire from './icons/Fire';
import Socials from './Socials';

function TechAreaTile() {
  return (
    <div className="w-[80%] ninetyPercentWidth m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
  
    <div className="  m-auto text-xl font-semibold  mb-4 border-t-2 p-2 mt-24">
        <h1>Sports News</h1>
    </div>
          <div className="TechTileArea m-auto ">
            <div className="md:grid md:grid-cols-1  lg:grid lg:grid-cols-2 border-2  p-4">
              <div className="col-span-1 grid grid-cols-1 ">
                {TechAreaTileData.map((data) => {
                  return (
                    <div key={data.id} className="">
                      <div className="sm:grid-cols-2 sm:flex md:grid-cols-2 md:flex lg:grid-cols-1">
                        <div className="overflow-hidden
                        w-[100%] h-[80%]  m-auto">
                          <img
                            className="object-cover w-[100%] h-[100%]  mx-auto sm:mx-auto hover:scale-110  transition-all duration-300 ease-linear"
                            src={data.image}
                            alt="imge not found"
                          />
                        </div>
                        <div className="p-3">
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
                          <h2 className="font-extrabold hover:text-blue-500">
                            {data.title}
                          </h2>
                          <p className="text-sm">{data.description}</p>
                          <button className=" bg-transparent hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-900 hover:border-transparent rounded">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}{" "}
              </div>
                <div className="lg:grid-cols-1 ">
                 <Socials/>
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
      },    {
        id: "5",
        image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "Copa America: Luis Suarez from devastated US",
        description:
          "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
      },
  ];
