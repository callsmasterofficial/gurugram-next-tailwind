import React from 'react'
import MainSinglepostItem from "./MainSinglepostItem"
export default function TrendingCarouselBottom() {
  return (
    <div className="mb-5">
      {TrendingSinglePostData.map((data) => {
        return (
          <div key={data.id} className="">
            <div  className="flex justify-start items-start my-2">
              <div className="w-[90px] h-[55px]  sm:w-[110px] sm:h-[70px] md:w-[120px] md:h-[77px]">
                <img src={data.img_src} alt="" className="w-[100%] h-[100%] object-cover md:rounded-md" />
              </div>
              <div className="mx-2 w-[100%]">
                <h2 className="text-[13px] font-bold sm:text-sm md:text-sm">{data.title}</h2>
              </div>
            </div>            
          </div>
        );
      })}
    </div>
  )
}

const TrendingSinglePostData = [
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
      img_src: "./assets/images/gallery-2.jpg",
      category: "Technology",
      date: "June 24, 2022",
      title: "Nancy Zhang a Chinese busy woman and Dhaka",
    },
  ]