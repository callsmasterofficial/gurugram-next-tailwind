import React from "react";
import BusinessCategoriesArea from "./BusinessCategoriesArea";

function BusinessArea() {
  return (
    // <div className="">
    //   <div className="  mx-4 text-xl font-semibold mt-4">
    //     <h1>Business News</h1>
    //   </div>
    //   {/* <div className="flex "> */}
    //   <div className=" mx-4 pt-4 pb-4 ">
    //     <div className="grid  md:grid-cols-3">
    //       <div className="col-span-2">
    //         {BusinessData.map((data) => {
    //           return (
    //             <div key={data.id} className="">
    //               <div className="lg:flex ">
    //                 <img
    //                   className=" md:mx-auto sm:mx-auto object-contain w-[21rem] h-[17rem] hover:scale-105 transition-all duration-300 "
    //                   src={data.image}
    //                   alt="imge not found"
    //                 />
    //                 <div className="md:mx-auto sm:mx-auto">
    //                   <h4 className=" text-gray-400 text-md m-3">
    //                     {data.category} / {data.date}
    //                   </h4>
    //                   <h2 className="m-3 font-extrabold hover:text-blue-500">
    //                     {data.title}
    //                   </h2>
    //                   <p className="m-3">{data.description}</p>
    //                   <button className="m-3 bg-transparent hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-900 hover:border-transparent rounded">
    //                     Read More
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //       <div className="lg:col-span-1 ">
    //         <BusinessCategoriesArea />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="entertainmentArea lg:mt-3">
    <div className="ml-5 text-xl relative font-semibold mt-10 sm:mt-3 mb-4">
      <h1>Business News</h1>
    </div>
    <div className="EntertainmentContainer">
      <div className=" md:grid  md:grid-cols-3">
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 ">
          {BusinessData.map((data) => {
            return (
              <div
                key={data.id}
                className=""
              >
                <div>
                  <div className="overflow-hidden">
                    <img
                      className="object-cover p-3 mx-auto sm:mx-auto hover:scale-110  transition-all duration-300 ease-linear"
                      src={data.image}
                      alt="imge not found"
                    />
                  </div>
                  <div className="p-3">
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
        <div className=" md:col-span-1 text-black m-2 ">
            {/* <h4 className="ml-5 font-bold text-xl">Most Share</h4> */}
            <BusinessCategoriesArea />
        </div>
      </div>
    </div>
  </div>
  );
}

export default BusinessArea;
const BusinessData = [
  {
    id: "1",
    image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-1.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    id: "2",
    image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    id: "3",
    image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-3.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    id: "4",
    image: "https://quomodosoft.com/html/newsprk/assets/images/entertainment-4.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
];
