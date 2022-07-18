import React from "react";

export default function PostRelatedArticles() {
  return (
    <>
      <div className="w-[90%] ninetyPercentWidth m-auto 3xl:w-[90%]  border-2 mt-3 sm:p-3">
        <div className="bg-red-600 text-white font-bold px-2 py-1 mb-3 w-fit titleSkew -skew-x-3">
          <p>Related Articles</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3">
          <div className="mx-1 cursor-pointer col-span-1">
            <div className="">
              <img
                src="https://www.teztarrar.com/wp-content/uploads/2022/07/11-july-31.jpg"
                alt="read next article i-1"
              />
            </div>
            <div className="m-2 hover:text-red-500">
              <p>
                <a href="https://www.teztarrar.com/tech/now-adanis-new-telecom-network-is-coming-to-give-competition-to-jio-airtel-idea/">
                  अब JIO, AIRTEL, IDEA को टक्कर देने आ रहा है अड़ानी का नया
                  टेलीकॉम नेटवर्क
                </a>
              </p>
            </div>
          </div>
          <div className="mx-1 cursor-pointer col-span-1">
            <div>
              <img
                src="https://www.teztarrar.com/wp-content/uploads/2022/07/9-july-7-1.jpg"
                alt="read next article i-2"
              />
            </div>
            <div className="m-2 hover:text-red-500">
              <p>
                <a href="https://www.teztarrar.com/tech/the-new-owner-of-jio-company-announced-to-give-everything-free-throughout-the-year/">
                  Jio कंपनी के नए मालिक ने सालभर सबकुछ फ्री देने का किया ऐलान
                </a>
              </p>
            </div>
          </div>
          <div className="mx-1 cursor-pointer col-span-1">
            <div>
              <img
                src="https://www.teztarrar.com/wp-content/uploads/2022/07/9-july-5-1.jpg"
                alt="read next article i-2"
              />
            </div>
            <div className="m-2 hover:text-red-500">
              <p>
                <a href="https://www.teztarrar.com/tech/oneplus-launches-new-smart-tv-of-y-series-will-get-this-much-discount/">
                  Oneplus ने लांच करा Y सीरीज का नया स्मार्ट TV, मिलेगा इतना
                  डिस्काउंट
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
