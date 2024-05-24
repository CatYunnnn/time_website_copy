import React from "react";
import styles from "../styles/more.module.css";
export default function More() {
  const images = [];
  for (let i = 1; i <= 15; i++) {
    images.push(require(`../icon/exporeMore${i}.webp`));
  }
  return (
    <div className={styles.more}>
      {/*expore more*/}
      <h2 className={styles.exporeMoreTitle}>EXPLORE MORE</h2>
      <div className={styles.cards}>
        <div
          style={{
            backgroundImage: `url(${images[0]})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${images[1]})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${images[2]})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${images[3]})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${images[4]})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      {/*sign up*/}
      <div className={styles.signUp}>
        <div className={styles.icon}>飛機圖案</div>
        <div className={styles.grayBackground}>
          <p>
            <span>Get The Brief newsletter.</span> Sign up to receive the top
            stories you need to know right now.
          </p>
          <button>SIGN UP NOW</button>
        </div>
      </div>
      {/*climate*/}
      <div className={styles.climate}>
        <div className={styles.titleAndSubscribe}>
          <h3>CLIMATE</h3>
          <p>Subscribe to the Climate newsletter</p>
        </div>
        <div className={styles.wrap}>
          <div className={styles.climateLeftSide}>
            <div
              className={styles.bigPhoto}
              style={{
                backgroundImage: `url(${images[5]})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3>The Impact of Inhaling Wildfire Smoke</h3>
            <p>
              Smoke from Canadian wildfires prompted air quality warnings in
              several U.S. states—and experts expect more air quality alerts
              this summer.
            </p>
          </div>
          <div className={styles.climateRightSide}>
            <div className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[6]})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>Storms Kill a Pregnant Woman</p>
            </div>
            <div className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[7]})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>Canadian Wildfire Smoke Chokes Midwest</p>
            </div>
            <div className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[8]})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>
                What Powell's Interest Rate Remarks Say for Green Investment
              </p>
            </div>
            <div className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[9]})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>EU Climate Chief Says the EU Can Work Better With Companies</p>
            </div>
          </div>
        </div>
      </div>
      {/*POLITICS*/}
      <div className={styles.politics}>
        <div className={styles.titleAndSubscribe}>
          <h3>POLITICS</h3>
          <p>Subscribe to the Politics newsletter</p>
        </div>
        <div className={styles.wrap}>
          <div className={styles.politicsLeftSide}>
            <div
              className={styles.bigPhoto}
              style={{
                backgroundImage: `url(${images[10]})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3>What Judge Merchan Knows About Trump</h3>
            <p>
              The judge overseeing the former president's criminal trial is
              familiar with his history, in and out of court.
            </p>
          </div>
          <div className={styles.politicsRightSide}>
            <div className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[11]})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>Why Democrats Are Excited About Florida</p>
            </div>
            <div className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[12]})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>Why Democrats Are Excited About Florida</p>
            </div>
            <div className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[13]})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>How Trump's Trials Could Define 2024</p>
            </div>
            <div className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[14]})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>How Is Trump's New Firm Worth Billions?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
