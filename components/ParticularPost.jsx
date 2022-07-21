import React from "react";
import DateTime from "./DateTime";
import { Chat, Fire, HomeIcon, Person, ShareIcon } from "./icons";
import SocialSharing from "./SocialSharing";
import PostSEOstuff from "./PostSEOstuff";
import Author from "./Author";
import PostRead2Next from "./PostRead2Next";
import PostRelatedArticles from "./PostRelatedArticles";
import LeaveReply from "./LeaveReply";

export default function ParticularPost() {
  return (
    <>
      <div className="m-auto border-2 p-4">
        {/* Home/tech/dynamic_route */}
        <div className="slugLink flex flex-start my-2 p-2 text-gray-400">
          <HomeIcon />
          <span className="text-[12px] ml-2 mr-1 hover:text-red-500">
            <a href="#"> होम /</a>
          </span>
          <span className="text-[12px] ml-1 mr-1 hover:text-red-500">
            <a href="#"> टेक /</a>
          </span>
          <span className="hidden md:inline text-[12px]">
            यहाँ मिल रहा है iPhone 12 पर 27,000 रुपये का डिस्काउंट, मौका ना गवाए
          </span>
        </div>
        {/* Category Tag */}
        <div className="bg-red-500 text-white text-[13px] font-bold w-fit p-2 ml-1 rounded-sm">
          <h4>टेक</h4>
        </div>
        {/* Article Title(Heading) & sub-title */}
        <div className="FullArticle my-4">
          <div className="articleTitle font-bold text-[25px] md:text-[40px] p-1">
            <h2>
              यहाँ मिल रहा है iPhone 12 पर 27,000 रुपये का डिस्काउंट, मौका ना
              गवाए
            </h2>
          </div>
          <div className="articleSub_title text-[15px] md:text-[25px] text-[#777] p-1">
            <p>
              iPhone 12 पर अब तक का सबसे बड़ा डिस्काउंट मिल रहा है। आइए आपको
              बताते हैं की आपको iPhone 12 कितने का मिलेगा
            </p>
          </div>
        </div>
        {/* Author - Date - Comments */}
        <div className="xl:flex">
          <div className="author flex items-center leading-6">
            <Person />
            <p className="text-[#333] text-[14px] mx-1 3xl:text-[18px]">
              Rahul B.
            </p>
          </div>
          {/* Date Time */}
          <div className="text-[12px] mt-2 md:mt-0 flex flex-wrap xl:mx-5 3xl:text-[18px] items-center text-center">
            <p className="mr-2">Last Updated: </p>
            <DateTime />
          </div>
          {/* Comments and Views */}
          <div className="flex md:ml-auto text-[12px] md:text-[20px] items-center text-center">
            <div className="comments flex my-2">
              <Chat />
              <p className="text-[12px] mx-1">50</p>
            </div>
            <div className="views flex m-2">
              <Fire />
              <p className="text-[12px] mx-1">250</p>
            </div>
          </div>
        </div>

        {/* Social Icons for Sharing... */}
        <div className="socialSharing hidden md:block md:my-2 border-2 p-2">
          <SocialSharing />
        </div>

        {/* Main Content -- Image and text */}
        <div className="main_Content border-2 p-2">
          <div className="max-w-max h-auto mx-auto">
            <img
              src="https://www.teztarrar.com/wp-content/uploads/2022/07/iphone-12-sale.png"
              alt="iphone photo upload"
            />
          </div>
          <div className="mt-4">
            <p>
              फ्लिपकार्ट पर Electronics Sale (इलेक्ट्रॉनिक्स सेल) चल रही है। ये
              सेल आज यानी 14 जुलाई से शुरू हुई है, जो 17 जुलाई तक चलने वाली है।
              इस सेल में इलेक्ट्रॉनिक प्रोडक्ट्स जैसे की स्मार्टफोन्स, स्मार्ट
              टीवी और कई अन्य इलेक्ट्रॉनिक प्रोडक्ट्स पर बम्पर डिस्काउंट मिल रहा
              है। महंगे से महंगे स्मार्टफोन्स इस सेल में काफी सस्ते में मिल रहे
              है और अगर आप एक iPhone फैन हैं, तो आपके लिए यह खबर काफी काम की हो
              सकती है। इस सेल में iPhone 12 पर अब तक का सबसे बड़ा डिस्काउंट मिल
              रहा है। आइए आपको बताते हैं की सेल में आपको iPhone 12 कितने का
              मिलेगा :- <br />
              <br />
              Phone 12 (64GB) की लॉन्चिंग प्राइज 65,900 रुपये है लेकिन Flipkart
              पर ये 51,999 रुपये में उपलब्ध है जिसका मतलब फोन पर 13,901 रुपये की
              छूट मिल रही है और फोन पर कई बैंक और एक्सचेंज ऑफर भी है, जिससे इसकी
              कीमत काफी कम हो जाएगी। <br />
              <br />
              अगर iPhone 12 को खरीदने के लिए आप SBI बैंक के credit card (क्रेडिट
              कार्ड) का इस्तेमाल करते हैं तो आपको 750 रुपये का डिस्काउंट मिलेगा
              जिससे फ़ोन की कीमत 51,999 से घटकर 51,249 रुपये हो जाएगी। <br />
              <br />
              iPhone 12 पर एक्सचेंज ऑफर भी मिल रहा है जो की 12,500 रुपये का है
              यानी की अगर आप अपना पुराना स्मार्टफोन एक्सचेंज करते हैं तो इतना ऑफ
              (12,500) आपको मिल सकता है लेकिन ऑफ तभी मिलेगा जब आपके पुराने फोन
              की कंडीशन अच्छी हो और मॉडल लेटेस्ट हो और अगर आप पूरा एक्सचेंज ऑफर
              पाने में कामयाब रहे तो फोन की कीमत 38,749 रुपये हो जाएगी यानी की
              सारे ऑफर मिलाकर आपको iPhone 12 पर 27 हजार रुपये की छूट मिल रही है।
            </p>
          </div>
        </div>

        {/* Post SEO stuff */}
        <div className="">
          <PostSEOstuff />
        </div>

        {/* Social Icons for Sharing... */}
        <div className="socialSharing hidden md:flex md:text-center md:items-center md:my-2 border-2 p-2">
          <ShareIcon />
          <p className="mx-3">शेयर</p>
          <SocialSharing />
        </div>

        {/* Author Details */}
        <div className="my-3">
          <Author authorImage="https://www.teztarrar.com/wp-content/uploads/2022/06/Untitled-design-180x180.png" />
        </div>

        {/* Redesign component */}
        <div className="main_Content border-2 p-2">
          <div className="max-w-max h-auto mx-auto">
            <img
              src="https://www.teztarrar.com/wp-content/uploads/2022/07/iphone-12-sale.png"
              alt="iphone photo upload"
            />
          </div>
          <div className="mt-4">
            <p>
              फ्लिपकार्ट पर Electronics Sale (इलेक्ट्रॉनिक्स सेल) चल रही है।
            </p>
          </div>
        </div>
      </div>

      {/* 2 Read Next Articles */}
      <div className="">
        <PostRead2Next />
      </div>

      {/* Related Articles */}
      <div className="">
        <PostRelatedArticles />
      </div>

      {/* Leave a Reply */}
      <div className="">
        <LeaveReply />
      </div>
    </>
  );
}
