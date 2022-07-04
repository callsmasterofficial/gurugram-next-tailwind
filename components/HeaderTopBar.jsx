import React from "react";
import styles from "../styles/HeaderTopBar.module.css";
// import Ticker from "react-ticker";
import { ThunderButton } from "./icons";

function HeaderTopBar() {
  return (
    <>
      <section className="section">
        <div className={styles.tickerTape}>
          <div className={styles.tickerTapeTitle}> <ThunderButton/><span className="hidden mx-2 sm:flex"> Latest Stories: </span> 
          
          </div>
          <div className={styles.tickerTapeScroll}>
            <div className={styles.tickerTapeCollection}>
              <div className={styles.tickerTapeStory}>
                <a href="" className={styles.tickerTapeLink}>
                  <span>
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
                    Watchout!! Finviews will revolutionize financial platforms
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
      </section>




    

    </>
  );
}

export default HeaderTopBar;
