import React, { useEffect, useState } from "react";
import styles from "../styles/HeaderTopBar.module.css";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Youtube from "./icons/Youtube";
import TimeIcon from "./icons/TimeIcon";

// import Ticker from "react-ticker";
import { ThunderButton } from "./icons";

function Time() {
  const [dt, setDt] = useState([]);

  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const current = new Date();
    const day = `${days[current.getDay()]}`;
    const month = `${months[current.getMonth()]}`;
    const toDaydate = `${current.getDate()}`;
    const year = `${current.getFullYear()}`;
    const date = [`${day},`, `${month}`, +`${toDaydate}`, +`${year}`];

    setDt(date);
  }, []);

  return (
    <div className="flex bg-black lg:h-10 items-center	">
      <span className="pr-[4px] pl-[4px] text-white text-[12px]">{dt[0]}</span>
      <span className="pr-[4px] text-white text-[12px]">{dt[1]}</span>
      <span className="pr-[4px] text-white text-[12px]">{dt[2]}</span>
      <span className="pr-[4px] text-white text-[12px]">{dt[3]}</span>
    </div>
  );
}

function HeaderTopBar() {
  return (
    <div className="w-[100%] bg-black">

    <div className="md:w-[90%]  lg:w-[80%] m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto flex items-center  ">
      <div className="w-[100%] m-auto overflow-hidden flex items-center ">
        <div className=" hidden sm:hidden md:hidden lg:block">
          <div className="flex items-center">
          <TimeIcon/>
          <Time />
          </div>
        </div>
        <div className="">
          <section className="section ">
            <div className={styles.tickerTape}>
              <div className={styles.tickerTapeTitle}>
                {" "}
                <ThunderButton />
                <span className="hidden mx-2 sm:flex text-[12px]"> Latest Stories: </span>
              </div>
              <div className={styles.tickerTapeScroll}>
                <div className={styles.tickerTapeCollection}>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span className={styles.tickerTapeSize}>
                        Watchout Finviews will revolutionize financial platforms
                      </span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>Financial modelling made easy</span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>Automatic update of financial data</span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>Amazing visualizations</span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>Unparallel interactions</span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>On to the next amazing feature</span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>Soon as a fully responsive web app</span>
                    </a>
                  </div>

                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>
                        Watchout!! Finviews will revolutionize financial
                        platforms
                      </span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>Financial modelling made easy</span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>Automatic update of financial data</span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>Amazing visualizations</span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>Unparallel interactions</span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>Don't be distracted by the stock tape</span>
                    </a>
                  </div>
                  <div className={styles.tickerTapeStory}>
                    <a href="" className={styles.tickerTapeLink}>
                      <span>Soon as a fully responsive web app</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Time components here */}
          </section>
        </div>
      </div>
      <div className="hidden sm:hidden md:hidden lg:block">
      <div className="flex  bg-black lg:h-10 items-center">
        <span className="p-2 ml-1 rounded-md transition-all cursor-pointer hover:bg-[#4267B2]"><Facebook color="white"/></span>
         <span className=" p-2 rounded-md transition-all cursor-pointer hover:bg-[#1DA1F2]"><Twitter color="white" margin="8px" /></span>
         <span className="p-2 rounded-md transition-all cursor-pointer hover:bg-[#FF0000]"><Youtube color="white" margin="8px" /></span>
         <span className=" p-2 transition-all cursor-pointer footerInsta"><Instagram color="white" margin="8px" /></span>
      </div> 
      </div>
    </div>
    </div>

  );
}

export default HeaderTopBar;
