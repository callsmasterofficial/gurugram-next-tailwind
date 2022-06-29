import React from "react";

function BusinessArea() {
  return (
    <>
      {BusinessData.map((data) => {
        return (
          <div key={data.id} className="w-[80%] md:w-[80%] m-auto pt-4 pb-4">
            <div className=" md:flex md:w-[60%]">
              <div className="w-[50rem] h-[16rem]  overflow-hidden">
                <img
                  className="object-contain w-[21rem] h-[17rem] hover:scale-105 transition-all duration-300 "
                  src={data.image}
                  alt="imge not found"
                />
              </div>
              <div className="ml-4">
                <h4 className=" text-gray-400 text-md m-3">
                  {data.category} / {data.date}
                </h4>
                <h2 className="m-3 font-extrabold hover:text-blue-500">
                  {data.title}
                </h2>
                <p className="m-3">{data.description}</p>
                <button className="m-3 bg-transparent hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-900 hover:border-transparent rounded">
                  Read More
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BusinessArea;
const BusinessData = [
  {
    id: "1",
    image: "https://quomodosoft.com/html/newsprk/assets/images/business-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    id: "2",
    image: "https://quomodosoft.com/html/newsprk/assets/images/business-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    id: "3",
    image: "https://quomodosoft.com/html/newsprk/assets/images/business-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    id: "4",
    image: "https://quomodosoft.com/html/newsprk/assets/images/business-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
];
