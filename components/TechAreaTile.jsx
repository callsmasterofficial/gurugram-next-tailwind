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
    <div className=" ">
      <div className=" border-2  p-4 ">
        <div className="flex text-gray-400 items-center">
          <HomeIcon />
          <p className="ml-2">Home / Tech</p>
        </div>
        <div className="mt-3 font-bold border-b-2 p-3 text-3xl">
          <h1>Tech</h1>
        </div>
        {TechAreaTileData.map((data) => {
          return (
            <div key={data.id} className=" mb-4 mt-4 ">
              <div className="grid  md:grid-cols-2 ">
                <div
                  className="overflow-hidden
                        w-[100%] h-[100%]  m-auto col-span-1"
                >
                  <img
                    className="object-cover w-[100%] h-[100%] lg:h-52 mx-auto sm:mx-auto"
                    src={data.image}
                    alt="imge not found"
                  />
                </div>
                <div className="px-3 col-span-1 relative category-gap">
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
                  </h4>
                  <h2 className="font-bold  xl:text-[20px] hover:text-blue-500 mt-2 mb-1  leading-[26px]">
                    <a href="#"> {data.title} </a>
                  </h2>
                  <p className=" mt-1 mb-1 text-[12px] xl:text-[16px] text-gray-600 ">
                    {data.description}
                  </p>
                  <button className="hover:bg-red-800 text-white text-[12px]  font-semibold py-2 px-4 border border-black-900 hover:border-transparent rounded bg-red-500">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>

      <div>
        <div className="btnBox flex md:items-center justify-start  mt-[12px] mb-[12px]">
          <button className=" border-y-2 p-2  border-x-2 rounded-tr-sm rounded-tb-sm">
            {" < "}
          </button>
          <button className="border-y-2  p-2  border-r-2 rounded-tr-sm rounded-tb-sm hover:bg-red-500 hover:text-white">
            Prev Page
          </button>
          <button className="border-y-2  p-2  border-l-2 rounded-tr-sm rounded-tb-sm ml-auto hover:bg-red-500 hover:text-white">
            Next Page
          </button>
          <button className=" border-y-2 p-2  border-x-2 rounded-tr-sm rounded-tb-sm">
            {" > "}
          </button>
        </div>
      </div>

      <div className="p-6 border-2">
        <h1 className="w-fit text-white px-2 py-1 titleSkew -skew-x-3 mb-4 ">
          Popular Searches
        </h1>
        <p>
          <a className="text-red-500" href="#">
            Tech News
          </a>
          , Latest Tech News, Tech News in Hindi, Tech News Today, Tech News
          India, Tech News Hindi, Latest Tech News in Hindi, Hindi Tech News,{" "}
          <a className="text-red-500" href="#">
            टेक न्यूज़
          </a>
          , टेक समाचार, Technology News, Latest Technology News, Technology News
          in Hindi,
          <a className="text-red-500" href="#">
            Delhi News
          </a>
          ,{" "}
          <a className="text-red-500" href="#">
            Hindi News
          </a>
        </p>
      </div>
    </div>
    // </div>
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
    title:
      "लॉन्च होने से पहले जाने Oppo Reno 8 सीरीज की कीमत, फीचर्स जान रह जाएंगे दंग",
    description:
      "Oppo अपना अपकमिंग स्मार्टफोन 18 जुलाई को लॉन्च करेगी लेकिन लॉन्च से पहले ही Oppo Reno 8 5G और Oppo Reno 8…",
  },
  {
    id: "2",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/amazefit-mini-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "भारत में लॉन्च होने जा रही है Amazfit GTS 4 Mini, 15 दिन तक चलेगी बैटरी",
    description:
      "Amazfit ने अपनी नई स्मार्टवॉच Amazfit GTS 4 Mini को भारत में 16 जुलाई को लॉन्च करने का तय किया…",
  },
  {
    id: "3",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/iphone-12-sale-390x220.png",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "यहाँ मिल रहा है iPhone 12 पर 27,000 रुपये का डिस्काउंट, मौका ना गवाए",
    description:
      "फ्लिपकार्ट पर Electronics Sale (इलेक्ट्रॉनिक्स सेल) चल रही है। ये सेल आज यानी 14 जुलाई से शुरू हुई है, जो…",
  },
  {
    id: "4",
    image: "https://www.teztarrar.com/wp-content/uploads/2022/07/5-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "मात्र 7 हजार रुपये में मिलेगा iPhone 13 Pro जैसा दिखता फोन, मिलेंगे तीन रियर कैमरे",
    description:
      "iPhone खरीदना लगभग हर किसी का सपना होता है लेकिन कई लोगो के साथ बजट की दिक्कत होती है और…",
  },
  {
    id: "5",
    image: "https://www.teztarrar.com/wp-content/uploads/2022/07/9-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "Google का ये ख़ास डिवाइस बनाएगा आपके पुराने TV को स्मार्ट, बस इतनी है कीमत",
    description:
      "भारत में Chromecast with Google TV को लॉन्च कर दिया गया है। इस डिवाइस से उपभोक्ता लीडिंग स्ट्रीमिंग प्लेटफॉर्म्स को…",
  },
  {
    id: "6",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/11-july-31-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "अब JIO, AIRTEL, IDEA को टक्कर देने आ रहा है अड़ानी का नया टेलीकॉम नेटवर्क",
    description:
      "भारत में जब से Jio ने टेलीकॉम नेटवर्क में कदम रखे है तब से लोगों को बहुत फायदा हुआ है…",
  },
  {
    id: "7",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/9-july-7-1-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "अब JIO, AIRTEL, IDEA को टक्कर देने आ रहा है अड़ानी का नया टेलीकॉम नेटवर्क",
    description:
      "Reliance Jio देश की सबसे बड़ी कम्पनी है। जियो ने 2016 में फ्री इंटरनेट और कालिंग देकर हर किसी को…",
  },
  {
    id: "8",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/9-july-5-1-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "Oneplus ने लांच करा Y सीरीज का नया स्मार्ट TV, मिलेगा इतना डिस्काउंट",
    description:
      "OnePlus ने नया स्मार्ट टीवी हाल ही में लॉन्च किया है। OnePlus कंपनी का नया टीवी अफोर्डेबल रेंज और वाई-सीरीज…",
  },
  {
    id: "9",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/07/image-1-1-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "Jio दे रहा है 399 रुपये का गजब ऑफर ! फ्री कॉलिंग, OTT प्लेटफॉर्म्स और बहुत कुछ",
    description:
      "JioFiber का नाम आपने सुना होगा। इसके तहत कंपनी कई प्रकार के प्लान ऑफर करती है और इसमें आपको 30Mbps…",
  },
  {
    id: "10",
    image:
      "https://www.teztarrar.com/wp-content/uploads/2022/06/Iphone-Discount-390x220.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "iphone पर मिला रहा है 10,000 का बम्पर डिस्काउंट, जल्द उठाये इस ऑफर का लाभ",
    description:
      "iPhone13 series company का फ्लैगशिप लाइनअप है और इस समय कंपनी iPhone 13 सीरीज पर बंपर डिस्काउंट दे रही है…",
  },
];
