import React from "react";

export default function FooterSidebar() {
  return (
    <>
      {FooterSidebarPostData.map((data) => {
        return (
          <div key={data.id} className="flex justify-start items-start m-6">
            <div>
              <p className="mx-3 text-3xl bg-gray-700 text-gray-400 rounded-full px-3 py-1 mt-2">{data.id}</p>
            </div>
            <div>
              <h4 className=" text-gray-400 text-md">{data.category} / {data.date}</h4>
              <h2>{data.title}</h2>
            </div>
            
          </div>
        );
      })}
    </>
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
