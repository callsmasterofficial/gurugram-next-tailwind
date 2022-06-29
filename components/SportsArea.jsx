import React from "react";
import MainSinglepostItem from "./FooterSidebar";

function SportsArea() {
  return (
    <>
      <div className="SportsArea md:w-[80%] m-auto w-[100%]">
        <div className="grid grid-cols-2">
          <div className="col-span-1 grid grid-cols-1 sm:grid-cols-1 ">
            {SportsAreaData.map((data) => {
              return (
                <div key={data.id} className="w-[24rem]">
                  <div>
                    <div className="h-[15rem] w-[24rem] overflow-hidden">
                      <img
                        className="object-cover w-[24rem] h-[15rem] hover:scale-110  transition-all duration-300 ease-linear"
                        src={data.image}
                        alt="imge not found"
                      />
                    </div>
                    <div>
                      <h4 className="mt-3 text-gray-400 text-md">
                        {data.category} / {data.date}
                      </h4>
                      <h2 className=" mt-3 font-extrabold hover:text-blue-500">
                        {data.title}
                      </h2>
                      <p className="mt-3 mb-5">{data.description}</p>
                      <button className=" bg-transparent hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-900 hover:border-transparent rounded">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}{" "}
          </div>
          <div className="col-span-1 grid grid-cols-1 sm:grid-cols-1 ">
            <MainSinglepostItem/>
          </div>
        </div>
      </div>
    </>
  );
}

export default SportsArea;

const SportsAreaData = [
  {
    id: "1",
    image: "https://quomodosoft.com/html/newsprk/assets/images/business-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
];
