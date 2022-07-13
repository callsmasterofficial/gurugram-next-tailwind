import React, { useEffect, useState } from "react";
import styles from "../styles/HeaderTopBar.module.css";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Youtube from "./icons/Youtube";
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
      <span className="pr-[4px] pl-[4px] text-gray-500">{dt[0]}</span>
      <span className="pr-[4px] text-gray-500">{dt[1]}</span>
      <span className="pr-[4px] text-gray-500">{dt[2]}</span>
      <span className="pr-[4px] text-gray-500">{dt[3]}</span>
    </div>
  );
}

function HeaderTopBar() {
  return (
    <div className="w-[100%] bg-black">

    <div className="md:w-[90%]  lg:w-[80%] m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto flex items-center  ">
      <div className="w-[100%] m-auto overflow-hidden flex items-center ">
        <div className=" hidden sm:hidden md:hidden lg:block">
          <Time />
        </div>
        <div className="">
          <section className="section ">
            <div className={styles.tickerTape}>
              <div className={styles.tickerTapeTitle}>
                {" "}
                <ThunderButton />
                <span className="hidden mx-2 sm:flex"> Latest Stories: </span>
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
        <span className="m-2"><Facebook color="gray"/></span>
         <span className="m-2"><Twitter color="gray" margin="8px" /></span>
         <span className="m-2"><Youtube color="gray" margin="8px" /></span>
         <span className="m-2"><Instagram color="gray" margin="8px" /></span>
      </div> 
      </div>
    </div>
    </div>

  );
}

export default HeaderTopBar;
