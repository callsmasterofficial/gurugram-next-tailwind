import React from "react";

export default function MainSinglepostItem() {
  return (
    <>
      {MainSinglePostData.map((data) => {
        return (
          <div key={data.id} className="flex justify-start items-start m-6">
            <div className="w-[100px] h-[77px]">
              <img src={data.img_src} alt="" className="w-[100%] h-[100%] object-cover" />
            </div>
            <div className="mx-2">
              <h4 className=" text-gray-400 text-md">{data.category} / {data.date}</h4>
              <h2>{data.title}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
}

const MainSinglePostData = [
  {
    id: "1",
    img_src: "./assets/images/gallery-1.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
  },
  {
    id: "2",
    img_src: "./assets/images/gallery-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Nancy Zhang a Chinese busy woman and Dhaka",
  },
  {
    id: "3",
    img_src: "./assets/images/gallery-3.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "U.S. Response subash says he will label regiions by rish of...",
  },
  {
    id: "4",
    img_src: "./assets/images/gallery-4.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Venezuela elan govt and opposit the property collect",
  },
  {
    id: "5",
    img_src: "./assets/images/gallery-5.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Cheap smartphone sensor could help you old food safe",
  },
];
