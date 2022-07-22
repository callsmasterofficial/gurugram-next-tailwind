import React from "react";

export default function ParticularRelatedPopular() {
  return (
    <>
      <div className="border-2 ">
        {/* Headings */}
        <div className="grid grid-cols-3 bg-gray-50 p-2 mb-1">
          {/* Popular */}
          <div className="text-center border-r-2 text-[16px]">
            <a>Popular</a>
          </div>

          {/* Recent */}
          <div className="text-center border-r-2 text-[16px]">
            <a>Recent</a>
          </div>

          {/* Comments */}
          <div className="text-center text-[16px]">
            <a>Comments</a>
          </div>
        </div>

        {/* News Area */}
        <div className="">
          {ParticularSidebarSinglePostData.map((data) => {
            return (
              <div key={data.id} className="singlePost grid grid-cols-6 p-2 ">
                {/* Image */}
                <div className="col-span-2">
                  <img
                    src="https://www.teztarrar.com/wp-content/uploads/2022/02/daaru-2-220x150.png"
                    alt=""
                    className="w-[100%] h-[100%]"
                  />
                </div>
                {/* Description */}
                <div className="col-span-4 mx-1 md:mx-2 text-[12px] md:text-[18px]">
                  <p>
                    दिल्ली में जींस कारोबारी से बदमाशों ने मांगे 30 लाख, न देने
                    पर दी हत्या की धमकी
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const ParticularSidebarSinglePostData = [
  {
    id: "1",
    img_src:
      "https://www.teztarrar.com/wp-content/uploads/2022/02/daaru-2-220x150.png",
    title:
      "दिल्ली में जींस कारोबारी से बदमाशों ने मांगे 30 लाख, न देने पर दी हत्या की धमकी",
  },
  {
    id: "2",
    img_src:
      "https://www.teztarrar.com/wp-content/uploads/2022/02/daaru-2-220x150.png",
    title:
      "दिल्ली में जींस कारोबारी से बदमाशों ने मांगे 30 लाख, न देने पर दी हत्या की धमकी",
  },
  {
    id: "3",
    img_src:
      "https://www.teztarrar.com/wp-content/uploads/2022/02/daaru-2-220x150.png",
    title:
      "दिल्ली में जींस कारोबारी से बदमाशों ने मांगे 30 लाख, न देने पर दी हत्या की धमकी",
  },
  {
    id: "4",
    img_src:
      "https://www.teztarrar.com/wp-content/uploads/2022/02/daaru-2-220x150.png",
    title:
      "दिल्ली में जींस कारोबारी से बदमाशों ने मांगे 30 लाख, न देने पर दी हत्या की धमकी",
  },
  {
    id: "5",
    img_src:
      "https://www.teztarrar.com/wp-content/uploads/2022/02/daaru-2-220x150.png",
    title:
      "दिल्ली में जींस कारोबारी से बदमाशों ने मांगे 30 लाख, न देने पर दी हत्या की धमकी",
  },
];
