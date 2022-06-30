import React from "react";
import FooterSidebar from "../components/FooterSidebar";

function EntertainmentArea() {
  return (
    <>
    <div className=" w-[80%] md:w-[80%] m-auto text-xl font-semibold mt-4 mb-4">
    <h1>Entertainment News</h1>
</div>
      <div className="EntertainmentContainer md:w-[80%] m-auto w-[100%] ">
        <div className="grid  grid-cols-3">
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 ">
            {EntertainmentAreaData.map((data) => {
              return (
                <div
                  key={data.id}
                  className="w-[24rem]"
                >
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

                    </div>
                  </div>
                </div>
              );
            })}{" "}
          </div>

          
          <div className="col-span-1 text-black  md:border-l-2 border-gray border-dashed">
              <h4 className="ml-5">News Categories</h4>
              <FooterSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default EntertainmentArea;

const EntertainmentAreaData = [
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
