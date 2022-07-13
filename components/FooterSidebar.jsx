import React from "react";

export default function FooterSidebar() {
  return (
    <div className="">
      
      {FooterSidebarPostData.map((data) => {
        return (
          <div key={data.id} className="flex justify-start items-start  border-gray-400 m-1 mt-7 mb-7">
            
            <div className="">
              <p className="mx-3 text-3xl bg-gray-700 text-gray-400 rounded-full px-3 py-1 ">{data.id}</p>
            </div>
            <div>

              <h2 className="inline-block">{data.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );

}

const FooterSidebarPostData = [
  {
    id: "1",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
  },
  {
    id: "2",
    category: "Technology",
    date: "June 24, 2022",
    title: "Nancy Zhang a Chinese busy woman and Dhaka",
  },
  {
    id: "3",
    category: "Technology",
    date: "June 24, 2022",
    title: "U.S. Response subash says he will label regiions by rish of...",
  },
  {
    id: "4",
    category: "Technology",
    date: "June 24, 2022",
    title: "Venezuela elan govt and opposit the property collect",
  },
  {
    id: "5",
    category: "Technology",
    date: "June 24, 2022",
    title: "Cheap smartphone sensor could help you old food safe",
  },
];
