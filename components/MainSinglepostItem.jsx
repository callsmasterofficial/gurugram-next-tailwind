import React from "react";

export default function MainSinglepostItem({active}) {
  return (
    <div className="">
      {MainSinglePostData[active].map((data) => {
        return (
          <div key={data.id} className="mx-[4px] my-2">
            <div  className="flex justify-start items-start">
              <div className="w-[140px] h-[77px]  sm:w-[120px] sm:h-[77px] md:w-[140px] md:h-[77px]">
                <img src={data.img_src} alt="" className="w-[100%] h-[100%] object-cover md:rounded-md" />
              </div>
              <div className="mx-2 w-[100%]">
                {/* <div className="flex flex-wrap justify-start">
                  <h4 className=" text-blue-400 text-[12px] sm:text-sm md:text-xs">{data.category} / {data.date}</h4>
                </div> */}
                <h2 className="text-[15px] sm:text-sm md:text-base">{data.title.length>35? data.title.slice(0,35)+"...": data.title}</h2>
              </div>
            </div>            
          </div>
        );
      })}
    </div>
  );
}

const MainSinglePostData = [
  [
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
    title: "U.S. Response subash says he will label regiions this is new format",
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
],[
  {
    id: "1",
    img_src: "./assets/images/gallery-1.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "xyz",
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
    title: "U.S. Response subash says he will label regiions this is new format",
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
],[
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
    title: "U.S. Response subash says he will label regiions this is new format",
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
]];
