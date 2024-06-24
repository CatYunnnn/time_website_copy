import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/more.module.css";
import paperPlane from "../icon/paperPlane.png";
import icon from "../icon/redPaperPlane.png";
import lessThanIcon from "../icon/lessThanIcon.png";
import greaterThanIcon from "../icon/greaterThanIcon.png";
import {
  updateDisplay,
  handleResize,
  offsetRight,
  offsetLeft,
  useEffectCallBack,
} from "../controller/functions";
export default function More() {
  const [offset, setOffset] = useState(0);
  let shortScreen = false;
  const climate = {
    buttonLeftRef: useRef(null),
    buttonRightRef: useRef(null),
    blurLeft: useRef(null),
    blurRight: useRef(null),
  };
  const politics = {
    buttonleftRef: useRef(null),
    buttonRightRef: useRef(null),
    blurLeft: useRef(null),
    blurRight: useRef(null),
  };
  const [politicsOffset, setPoliticsOffset] = useState(0);
  const images = [];
  for (let i = 1; i <= 15; i++) {
    images.push(require(`../icon/exporeMore${i}.webp`));
  }
  const style = {
    backgroundSize: "cover",
    backgroundPosition: "center,center",
  };
  const climateTransform = {
    transform: `translateX(${-offset}px)`,
  };
  const politicsTransform = {
    transform: `translateX(${-politicsOffset}px)`,
  };
  /*隨螢幕大小改變按鈕、淡化效果*/
  /*deal with climate*/
  useEffectCallBack(
    useEffect,
    handleResize,
    updateDisplay,
    shortScreen,
    setOffset,
    climate.buttonLeftRef,
    climate.buttonRightRef,
    climate.blurLeft,
    climate.blurRight
  );
  /*deal with politics*/
  useEffectCallBack(
    useEffect,
    handleResize,
    updateDisplay,
    shortScreen,
    setPoliticsOffset,
    politics.buttonleftRef,
    politics.buttonRightRef,
    politics.blurLeft,
    politics.blurRight
  );
  return (
    <div className={styles.more}>
      {/*expore more*/}
      <h2 className={styles.exporeMoreTitle}>EXPLORE MORE</h2>
      <div className={styles.aspectRatio}>
        <div className={styles.cards}>
          <div
            style={{
              backgroundImage: `url(${images[0]})`,
              ...style,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${images[1]})`,
              ...style,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${images[2]})`,
              ...style,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${images[3]})`,
              ...style,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${images[4]})`,
              ...style,
            }}
          ></div>
        </div>
      </div>

      {/*sign up*/}
      <div className={styles.signUp}>
        <div className={styles.icon}>
          <img src={paperPlane} alt="paper airplane icon" />
        </div>
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
        <div ref={climate.blurLeft} className={styles.blurLeft}>
          <button
            onClick={() =>
              offsetLeft(
                offset,
                setOffset,
                updateDisplay,
                climate.buttonLeftRef,
                climate.buttonRightRef,
                climate.blurLeft,
                climate.blurRight
              )
            }
            ref={climate.buttonLeftRef}
            className={styles.buttonLeft}
          >
            <img src={lessThanIcon} alt="less than icon" />
          </button>
        </div>
        <div ref={climate.blurRight} className={styles.blurRight}>
          <button
            onClick={() =>
              offsetRight(
                offset,
                setOffset,
                updateDisplay,
                climate.buttonLeftRef,
                climate.buttonRightRef,
                climate.blurLeft,
                climate.blurRight
              )
            }
            ref={climate.buttonRightRef}
            className={styles.buttonRight}
          >
            <img src={greaterThanIcon} alt="greater than icon" />
          </button>
        </div>
        <div className={styles.titleAndSubscribe}>
          <h3>CLIMATE &gt;</h3>
          <p>
            <img src={icon} alt="red newsletter paper plane" />
            Subscribe to the Climate newsletter
          </p>
        </div>
        <div className={styles.wrap}>
          <div
            style={{ ...climateTransform }}
            className={styles.climateLeftSide}
          >
            <div
              className={styles.bigPhoto}
              style={{
                backgroundImage: `url(${images[5]})`,
                ...style,
                cursor: "pointer",
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
            <div style={{ ...climateTransform }} className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[6]})`,
                  ...style,

                  cursor: "pointer",
                }}
              ></div>
              <p>Storms Kill a Pregnant Woman</p>
            </div>
            <div style={{ ...climateTransform }} className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[7]})`,
                  ...style,
                  cursor: "pointer",
                }}
              ></div>
              <p>Canadian Wildfire Smoke Chokes Midwest</p>
            </div>
            <div style={{ ...climateTransform }} className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[8]})`,
                  ...style,
                  cursor: "pointer",
                }}
              ></div>
              <p>
                What Powell's Interest Rate Remarks Say for Green Investment
              </p>
            </div>
            <div style={{ ...climateTransform }} className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[9]})`,
                  ...style,
                  cursor: "pointer",
                }}
              ></div>
              <p>EU Climate Chief Says the EU Can Work Better With Companies</p>
            </div>
          </div>
        </div>
      </div>
      {/*POLITICS*/}
      <div className={styles.politics}>
        <div ref={politics.blurLeft} className={styles.blurLeft}>
          <button
            onClick={() =>
              offsetLeft(
                politicsOffset,
                setPoliticsOffset,
                updateDisplay,
                politics.buttonleftRef,
                politics.buttonRightRef,
                politics.blurLeft,
                politics.blurRight
              )
            }
            ref={politics.buttonleftRef}
            className={styles.buttonLeft}
          >
            <img src={lessThanIcon} alt="less than icon" />
          </button>
        </div>
        <div ref={politics.blurRight} className={styles.blurRight}>
          <button
            onClick={() =>
              offsetRight(
                politicsOffset,
                setPoliticsOffset,
                updateDisplay,
                politics.buttonleftRef,
                politics.buttonRightRef,
                politics.blurLeft,
                politics.blurRight
              )
            }
            ref={politics.buttonRightRef}
            className={styles.buttonRight}
          >
            <img src={greaterThanIcon} alt="greater than icon" />
          </button>
        </div>
        <div className={styles.titleAndSubscribe}>
          <h3>POLITICS &gt;</h3>
          <p>
            <img src={icon} alt="red newsletter paper plane" />
            Subscribe to the Politics newsletter
          </p>
        </div>
        <div className={styles.wrap}>
          <div
            style={{ ...politicsTransform }}
            className={styles.politicsLeftSide}
          >
            <div
              className={styles.bigPhoto}
              style={{
                backgroundImage: `url(${images[10]})`,
                ...style,
                cursor: "pointer",
              }}
            ></div>
            <h3>What Judge Merchan Knows About Trump</h3>
            <p>
              The judge overseeing the former president's criminal trial is
              familiar with his history, in and out of court.
            </p>
          </div>
          <div className={styles.politicsRightSide}>
            <div style={{ ...politicsTransform }} className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[11]})`,
                  ...style,
                  cursor: "pointer",
                }}
              ></div>
              <p>Why Democrats Are Excited About Florida</p>
            </div>
            <div style={{ ...politicsTransform }} className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[12]})`,
                  ...style,
                  cursor: "pointer",
                }}
              ></div>
              <p>Why Democrats Are Excited About Florida</p>
            </div>
            <div style={{ ...politicsTransform }} className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[13]})`,
                  ...style,
                  cursor: "pointer",
                }}
              ></div>
              <p>How Trump's Trials Could Define 2024</p>
            </div>
            <div style={{ ...politicsTransform }} className={styles.card}>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url(${images[14]})`,
                  ...style,
                  cursor: "pointer",
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
