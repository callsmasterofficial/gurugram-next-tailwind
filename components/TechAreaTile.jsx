import React from "react";
import Person from "./icons/Person";
import Chat from "./icons/Chat";
import Fire from "./icons/Fire";
import Socials from "./Socials";
import WeatherCard from "./WeatherCard";
import MainRelatedPopularSidebar from "./MainRelatedPopularSidebar";
import TazaKhabar from "./TazaKhabar";
import { HomeIcon } from "./icons";

function TechAreaTile() {
  return (
    <div className="w-[80%] ninetyPercentWidth m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
      <div className="  m-auto text-xl font-semibold  mb-4  p-2 mt-24">
      </div>
      <div className="TechTileArea m-auto ">
        <div className="md:grid md:grid-cols-1  lg:grid lg:grid-cols-3 ">
          <div className="col-span-1 lg:col-span-2 border-2  p-4 mr-3">
            <div className="flex text-gray-400 p-3">
              <HomeIcon />
              <p className="ml-2">Home / Tech</p>
            </div>

            <div className="mt-3 font-bold border-b-2 p-3 text-3xl">
              <h1>Tech</h1>
            </div>
            {TechAreaTileData.map((data) => {
              return (
                <div key={data.id} className=" mb-4 gallery_item mt-4 ">
                  <div className="grid  md:grid-cols-2 ">
                    <div
                      className="overflow-hidden
                        w-[100%] h-[100%]  m-auto col-span-1"
                    >
                      <img
                        className="object-cover w-[100%] h-[100%] lg:h-52 mx-auto sm:mx-auto hover:scale-110  transition-all duration-300 ease-linear"
                        src={data.image}
                        alt="imge not found"
                      />
                    </div>
                    <div className="px-3 col-span-1 ">
                      <h4 className=" text-gray-400 text-xs">
                        <div className="flex">
                          <div className="flex">
                            <Person />
                            <p className="mx-1 items-center">Pulkit Mittal</p>
                          </div>
                          <div className="flex md:ml-auto	">
                            <Chat />
                            <p className="mx-1">0</p>
                            <Fire />
                            <p className="mx-1">32</p>
                          </div>
                        </div>

                        {/* {data.category} / {data.date} */}
                      </h4>
                      <h2 className="font-extrabold text-xl	 hover:text-blue-500 mt-2 mb-2 text-justify">
                        {/* {data.title.length>35? data.title.slice(0,35)+"...": data.title} */}
                        {/* {data.title.length>40? data.title.slice(0,35)+"...": data.title} */}
                        {data.title}
                      </h2>
                      <p className=" mt-1 mb-1 text-xs text-gray-600 	">{data.description}</p>
                      <button className="  hover:bg-red-800 text-white font-semibold py-2 px-4 border border-black-900 hover:border-transparent rounded bg-red-500 mt-3">
                        Read More 
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}{" "}
          </div>

          <div className="lg:col-span-1">
            <div className=" mb-10 border-2 p-2  socials-gap">
              <Socials />
            </div>
            <div className="mt-10 mb-10 border-2 p-2">
              <WeatherCard />
            </div>
            <div className="mt-10 mb-10">
              <MainRelatedPopularSidebar />
            </div>
            <div className="mt-10 mb-10 border-2 p-2">
              <TazaKhabar />
            </div>
          </div>

          {/* <div className="col-span-1 grid grid-cols-1 sm:grid-cols-1 ">
                 <SportsAreaCarousel/>
              </div>
              <div className="col-span-1 grid grid-cols-1 sm:grid-cols-1 ">
                 <NewsLetter/> 
                 <img src="./assets/images/ad/ad-3.png" /> 
              </div> */}
        </div>
      </div>
      {/* button Next Page */}
      <div className="md:grid md:grid-cols-1  lg:grid lg:grid-cols-3 ">
        <div className="col-span-1 lg:col-span-2  mr-3 mt-6">
      <div className="btnBox flex md:items-center justify-end  ">
          <button className="border-y-2  p-2  border-l-2 rounded-tr-sm rounded-tb-sm">Next Page</button>
          <button className=" border-y-2 p-2  border-x-2 rounded-tr-sm rounded-tb-sm">{" > "}</button> 
      </div>
      </div>
      </div>

      <div>

      </div>
      <div className="md:grid md:grid-cols-1  lg:grid lg:grid-cols-3 ">
        <div className="col-span-1 lg:col-span-2 border-2  p-4 mr-3 mt-6">
          <h1 className="mb-7 bg-black w-fit text-white ">Popular Searches</h1>
          <p><a className="text-red-500" href="#">Tech News</a>, Latest Tech News, Tech News in Hindi, Tech News Today, Tech News India, Tech News Hindi, Latest Tech News in Hindi, Hindi Tech News, <a className="text-red-500" href="#">टेक न्यूज़</a>, टेक समाचार, Technology News, Latest Technology News, Technology News in Hindi,<a className="text-red-500" href="#">Delhi News</a>, <a className="text-red-500" href="#">Hindi News</a></p>
        </div>
      </div>
    </div>
  );
}

export default TechAreaTile;

const TechAreaTileData = [
  {
    id: "1",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/oppo-reno-series-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "लॉन्च होने से पहले जाने Oppo Reno 8 सीरीज की कीमत, फीचर्स जान रह जाएंगे दंग",
    description:
      "Oppo अपना अपकमिंग स्मार्टफोन 18 जुलाई को लॉन्च करेगी लेकिन लॉन्च से पहले ही Oppo Reno 8 5G और Oppo Reno 8…",
  },
  {
    id: "2",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/amazefit-mini-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "भारत में लॉन्च होने जा रही है Amazfit GTS 4 Mini, 15 दिन तक चलेगी बैटरी",
    description:
      "Amazfit ने अपनी नई स्मार्टवॉच Amazfit GTS 4 Mini को भारत में 16 जुलाई को लॉन्च करने का तय किया…",
  },
  {
    id: "3",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/iphone-12-sale-390x220.png",
    category: "Technology",
    date: "June 24, 2022",
    title: "यहाँ मिल रहा है iPhone 12 पर 27,000 रुपये का डिस्काउंट, मौका ना गवाए",
    description:
      "फ्लिपकार्ट पर Electronics Sale (इलेक्ट्रॉनिक्स सेल) चल रही है। ये सेल आज यानी 14 जुलाई से शुरू हुई है, जो…",
  },
  {
    id: "4",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/5-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "मात्र 7 हजार रुपये में मिलेगा iPhone 13 Pro जैसा दिखता फोन, मिलेंगे तीन रियर कैमरे",
    description:
      "iPhone खरीदना लगभग हर किसी का सपना होता है लेकिन कई लोगो के साथ बजट की दिक्कत होती है और…",
  },
  {
    id: "5",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/9-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Google का ये ख़ास डिवाइस बनाएगा आपके पुराने TV को स्मार्ट, बस इतनी है कीमत",
    description:
      "भारत में Chromecast with Google TV को लॉन्च कर दिया गया है। इस डिवाइस से उपभोक्ता लीडिंग स्ट्रीमिंग प्लेटफॉर्म्स को…",
  },
  {
    id: "6",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/11-july-31-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "अब JIO, AIRTEL, IDEA को टक्कर देने आ रहा है अड़ानी का नया टेलीकॉम नेटवर्क",
    description:
      "भारत में जब से Jio ने टेलीकॉम नेटवर्क में कदम रखे है तब से लोगों को बहुत फायदा हुआ है…",
  },
  {
    id: "7",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/9-july-7-1-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "अब JIO, AIRTEL, IDEA को टक्कर देने आ रहा है अड़ानी का नया टेलीकॉम नेटवर्क",
    description:
      "Reliance Jio देश की सबसे बड़ी कम्पनी है। जियो ने 2016 में फ्री इंटरनेट और कालिंग देकर हर किसी को…",
  },
  {
    id: "8",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/9-july-5-1-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Oneplus ने लांच करा Y सीरीज का नया स्मार्ट TV, मिलेगा इतना डिस्काउंट",
    description:
      "OnePlus ने नया स्मार्ट टीवी हाल ही में लॉन्च किया है। OnePlus कंपनी का नया टीवी अफोर्डेबल रेंज और वाई-सीरीज…",
  },
  {
    id: "9",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/image-1-1-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Jio दे रहा है 399 रुपये का गजब ऑफर ! फ्री कॉलिंग, OTT प्लेटफॉर्म्स और बहुत कुछ",
    description:
      "JioFiber का नाम आपने सुना होगा। इसके तहत कंपनी कई प्रकार के प्लान ऑफर करती है और इसमें आपको 30Mbps…",
  },
  {
    id: "10",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/06/Iphone-Discount-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "iphone पर मिला रहा है 10,000 का बम्पर डिस्काउंट, जल्द उठाये इस ऑफर का लाभ",
    description:
      "iPhone13 series company का फ्लैगशिप लाइनअप है और इस समय कंपनी iPhone 13 सीरीज पर बंपर डिस्काउंट दे रही है…",
  },
];
