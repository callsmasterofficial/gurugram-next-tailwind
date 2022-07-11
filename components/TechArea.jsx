import React from "react";

function TechArea() {
  return (
    // <div className="w-[80%]  m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
    // <div className="grid grid-cols-5 mt-4">
    //   <div className="col-span-1">
    //     <img className="h-48"src="https://www.teztarrar.com/wp-content/uploads/2022/06/Iphone-Discount.jpg"></img>
    //     <img className="h-48 mt-[1px]" src="https://www.teztarrar.com/wp-content/uploads/2022/06/featured-image1.png"></img>
    //   </div>
    //   <div className='col-span-3'>
    //   <img className="h-96" src="https://www.teztarrar.com/wp-content/uploads/2022/07/image-1-1.jpg"></img>
    //   </div>
    //   <div className="col-span-1">
    //     <img className="h-48" src="https://www.teztarrar.com/wp-content/uploads/2022/06/Iphone-Discount.jpg"></img>
    //     <img className="h-48 mt-[1px]" src="https://www.teztarrar.com/wp-content/uploads/2022/06/featured-image1.png"></img>
    //   </div>

    // </div>
    // </div>
    <div className="w-[90%]  m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
      {/* <div className="grid grid-cols-5 mt-4"> */}
      {TechAreaData.map((techArea) => {
        <div>
          <div className="mt-10">
            <img className="mb-1 rounded-md h-36 w-[100%]" src={techArea.firstDivImg_1}></img>
            <img className="mb-1 rounded-md h-36 w-[100%]" src={techArea.firstDivImg_2}></img>
            <p>{techArea.title}</p>
          </div>
          <div className="">
            <img className="mb-1 rounded-md h-36 w-[100%]" src=""></img>
          </div>
          <div className="">
            <img className="mb-1 rounded-md h-36 w-[100%]" src=""></img>
            <img className="mb-1 rounded-md h-36 w-[100%]" src=""></img>
          </div>
        </div>;
      })}
    </div>
  );
}

export default TechArea;

const TechAreaData = [
  {
    id: "t1",
    firstDivImg_1:
      "https://www.teztarrar.com/wp-content/uploads/2022/06/Iphone-Discount.jpg",
    firstDivImg_2:
      "https://www.teztarrar.com/wp-content/uploads/2022/06/featured-image1.png",
    secondDivImg_1:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/image-1-1.jpg",
    thirdDivImg_1:
      " https://www.teztarrar.com/wp-content/uploads/2022/06/featured-image1.png",
    thirdDivImg_2:
      " https://www.teztarrar.com/wp-content/uploads/2022/06/featured-image1.png",
    title: "huge discount on  ipone 10",
  },
];
