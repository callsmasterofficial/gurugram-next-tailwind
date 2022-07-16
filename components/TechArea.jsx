import React from "react";

function TechArea() {
  return (
    <>
<div className="w-[80%] ninetyPercentWidth m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
          {TechAreaData.map((techArea) => {
          return (
            <div className="formatMdMain">
              <div className=" format formatMd  ">
                <div className=" format">
                  <img
                    className="mb-1 rounded-md h-36 w-[100%]"
                    src={techArea.firstDivImg_1}
                  />
                </div>
                <div className="format  ">
                  <img
                    className="mb-1 rounded-md h-36 w-[100%] "
                    src={techArea.firstDivImg_2}
                  />
                </div>
              </div>
              <div className="image formatMmd">
                <img
                  className="mb-1 rounded-md h-36 w-[100%] formatHeight"
                  src={techArea.secondDivImg_1}
                />
              </div>
              <div className="format formatMd">
                <div className=" format">
                  <img
                    className="mb-1 rounded-md h-36 w-[100%]"
                    src={techArea.thirdDivImg_1}
                  />
                </div>
                <div className="format">
                  <img
                    className="mb-1 rounded-md h-36 w-[100%]"
                    src={techArea.thirdDivImg_2}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
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
