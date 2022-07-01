import React from "react";
import NewsLetter from "./NewsLetter";
import SportsAreaCarousel from "./SportsAreaCarousel";
// import MainSinglepostItem from "./FooterSidebar";
// import TrendingCarouselBottom from "./TrendingCarouselBottom";

function SportsArea() {
  return (
    <>

<div className=" w-[80%] md:w-[80%] m-auto text-xl font-semibold mt-4 mb-4">
    <h1>Sports News</h1>
</div>
      <div className="SportsArea md:w-[80%] m-auto w-[100%]">
        <div className="md:grid md:grid-cols-3">
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-1 ">
            {SportsAreaData.map((data) => {
              return (
                <div key={data.id} className="">
                  <div>
                    <div className="overflow-hidden">
                      <img
                        className="object-cover p-3 mx-auto sm:mx-auto hover:scale-110  transition-all duration-300 ease-linear"
                        src={data.image}
                        alt="imge not found"
                      />
                    </div>
                    <div className="p-3">
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
            <SportsAreaCarousel/>
          </div>
          <div className="col-span-1 grid grid-cols-1 sm:grid-cols-1 ">
            <NewsLetter/>
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
    image: "https://quomodosoft.com/html/newsprk/assets/images/sports-news.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
];
