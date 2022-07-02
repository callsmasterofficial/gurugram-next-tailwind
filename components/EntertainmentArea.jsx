import React from "react";
import FooterSidebar from "./FooterSidebar";

function EntertainmentArea() {
  return (
    <div className="entertainmentArea ">
      <div className="ml-5 text-xl relative font-semibold mt-10 sm:mt-3 mb-4">
        <h1>Entertainment News</h1>
      </div>
      <div className="EntertainmentContainer">
        <div className=" md:grid  md:grid-cols-3">
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 ">
            {EntertainmentAreaData.map((data) => {
              return (
                <div
                  key={data.id}
                  className=""
                >
                  <div className="">
                    <div className="overflow-hidden w-[95%] h-[80%] m-auto">
                      <img
                        className="object-cover  w-[100%] h-[100%]  mx-auto sm:mx-auto hover:scale-110  transition-all duration-300 ease-linear"
                        src={data.image}
                        alt="imge not found"
                      />
                    </div>
                    <div className="p-3 ">
                      <h4 className=" text-gray-400 text-md">
                        {data.category} / {data.date}
                      </h4>
                      <h2 className=" font-extrabold hover:text-blue-500">
                        {data.title}
                      </h2>
                      <p className=" mb-5">{data.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}{" "}
          </div>          
          <div className=" md:col-span-1 text-black  md:border-l-2 border-gray border-dashed">
              <h4 className="ml-5 font-bold text-xl">Most Share</h4>
              <FooterSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntertainmentArea;

const EntertainmentAreaData = [
  {
    id: "1",
    image:
      "https://quomodosoft.com/html/newsprk/assets/images/entertainment-1.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    id: "2",
    image:
      "https://quomodosoft.com/html/newsprk/assets/images/entertainment-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    id: "3",
    image:
      "https://quomodosoft.com/html/newsprk/assets/images/entertainment-3.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    id: "4",
    image:
      "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
];
