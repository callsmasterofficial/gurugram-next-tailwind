import React from 'react'
export default function SportsAreaCarousel() {
  return (
    <div className="">
      {SportsAreaCarouselData.map((data) => {
        return (
          <div key={data.id} className="border-dashed border-b-[1px] border-gray-400">
            <div  className="flex justify-start items-start m-2">
              <div className="w-[90px] h-[55px]  sm:w-[110px] sm:h-[70px] md:w-[140px] md:h-[87px]">
                <img src={data.img_src} alt="" className="w-[100%] h-[100%] object-cover md:rounded-md" />
              </div>
              <div className="mx-2 w-[100%]">
                <div className="flex flex-wrap justify-start">
                  <h4 className=" text-blue-400 text-[12px] sm:text-sm md:text-xs">{data.category} / {data.date}</h4>
                </div>
                <h2 className="text-[13px] sm:text-sm md:text-base">{data.title}</h2>
              </div>
            </div>            
          </div>
        );
      })}
    </div>
  )
}

const SportsAreaCarouselData = [
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
        img_src: "./assets/images/gallery-3.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "U.S. Response subash says he will label regiions this is new format",
      },
      {
        id: "5",
        img_src: "./assets/images/gallery-3.jpg",
        category: "Technology",
        date: "June 24, 2022",
        title: "U.S. Response subash says he will label regiions this is new format",
      },
  ]