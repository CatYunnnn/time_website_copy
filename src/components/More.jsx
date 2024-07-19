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
  changeCard,
  useIfInMobile,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
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
  /////////////mobile
  const [circleBackground, setCircleBackground] = useState(0);
  const [ifMobile, setIfMobile] = useState(false);
  /*dragging but not move*/
  const draggingStartX = useRef(0);
  const draggingCurrentX = useRef(0);
  const isDragging = useRef(false);
  /*dragging and moving cards*/
  const buttons = [];
  for (let i = 0; i < 5; i++) {
    buttons.push(
      <div
        onClick={() => changeCard(i, setCircleBackground)}
        className={`${styles.circle} ${
          circleBackground === i ? styles.black : ""
        }`}
      ></div>
    );
  }
  /*dragging photo to change photo*/
  const photoChangeStart = function (e) {
    const width = window.innerWidth;
    if (width > 768) return;
    const touch = e.touches[0];
    draggingStartX.current = touch.clientX;
    isDragging.current = true;
  };
  const photoChangeMove = function (e) {
    if (!isDragging) return;
    const touch = e.touches[0];
    draggingCurrentX.current = touch.clientX;
  };
  const photoChangeEnd = function () {
    if (!isDragging) return;
    const width = window.innerWidth;
    if (
      draggingCurrentX.current - draggingStartX.current > width / 4 &&
      circleBackground > 0
    ) {
      setCircleBackground((prevCircleBackground) => prevCircleBackground - 1);
    } else if (
      draggingCurrentX.current - draggingStartX.current < -width / 4 &&
      circleBackground < 4
    ) {
      setCircleBackground((prevCircleBackground) => prevCircleBackground + 1);
    }
  };
  /*change photo size and photo*/
  const changePhotoSize = function (index) {
    if (ifMobile === false) return;
    if (circleBackground - index === 0) {
      return {
        width: "300px",
        height: "546.797px",
        transform: "translateX(0)",
        zIndex: "1",
      };
    } else if (index === circleBackground - 1) {
      return {
        width: "270px",
        height: "492.12px",
        transform: "translateX(-27px)",
        zIndex: "-1",
      };
    } else if (index === circleBackground - 2) {
      return {
        width: "240px",
        height: "437.44px",
        transform: "translateX(-54px)",
        zIndex: "-2",
      };
    } else if (index === circleBackground + 1) {
      return {
        width: "270px",
        height: "492.12px",
        transform: "translateX(27px)",
        zIndex: "-1",
      };
    } else if (index === circleBackground + 2) {
      return {
        width: "240px",
        height: "437.44px",
        transform: "translateX(54px)",
        zIndex: "-2",
      };
    } else {
      return { display: "none" };
    }
  };
  /**/
  useIfInMobile(ifMobile, setIfMobile, useEffect);
  const climateButton = [];
  const politicsButton = [];
  const [climateCircle, setClimateCircle] = useState(0);
  const [politicsCircle, setPoliticsCircle] = useState(0);
  const [climateMobileOffset, setClimateMobileOffset] = useState(0);
  const [politicsMobileOffset, setPoliticsMobileOffset] = useState(0);
  const climateMobileTransform = {
    transform: `translateX(calc(-${climateMobileOffset}))`,
  };
  const politesMobileTransform = {
    transform: `translateX(calc(-${politicsMobileOffset}))`,
  };
  const climateStyle = ifMobile ? climateMobileTransform : climateTransform;
  const politeStyle = ifMobile ? politesMobileTransform : politicsTransform;
  const climateDragging = useRef(false);
  const politicsDragging = useRef(false);
  const climateMouseStartX = useRef(0);
  const politicsMouseStartX = useRef(0);
  const [climateDraggingOffset, setClimateDraggingOffset] = useState(0);
  const [politicsDraggingOffset, setPoliticsDraggingOffset] = useState(0);
  const climateCurrentX = useRef(0);
  const politicsCurrentX = useRef(0);

  /**/
  useEffect(() => {
    (() => {
      if (climateCircle === 0) {
        setClimateMobileOffset("0%");
      } else if (climateCircle === 1) {
        setClimateMobileOffset("90%");
      } else if (climateCircle === 4) {
        setClimateMobileOffset("390% + 16px");
      } else {
        setClimateMobileOffset(
          (climateCircle - 1) * 100 +
            90 +
            "% - " +
            ((climateCircle - 1) * 8 + "px")
        );
      }
      if (politicsCircle === 0) {
        setPoliticsMobileOffset("0%");
      } else if (politicsCircle === 1) {
        setPoliticsMobileOffset("90%");
      } else if (politicsCircle === 4) {
        setPoliticsMobileOffset("390% + 16px");
      } else {
        setPoliticsMobileOffset(
          (politicsCircle - 1) * 100 +
            90 +
            "% - " +
            ((politicsCircle - 1) * 8 + "px")
        );
      }
    })();
  }, [climateCircle, politicsCircle]);
  for (let i = 0; i < 5; i++) {
    climateButton.push(
      <div
        onClick={() => changeCard(i, setClimateCircle)}
        className={`${styles.smallMarginCircle} ${
          climateCircle === i ? styles.black : ""
        }`}
      ></div>
    );
    politicsButton.push(
      <div
        onClick={() => changeCard(i, setPoliticsCircle)}
        className={`${styles.smallMarginCircle} ${
          politicsCircle === i ? styles.black : ""
        }`}
      ></div>
    );
  }
  return (
    <div className={styles.more}>
      {/*expore more*/}
      <h2 className={styles.exporeMoreTitle}>EXPLORE MORE</h2>
      <div className={styles.stories}>
        <div className={styles.storiesButton}>{buttons}</div>
      </div>
      <div className={styles.aspectRatio}>
        <div className={styles.cards}>
          <div
            onTouchStart={(e) => photoChangeStart(e)}
            onTouchMove={(e) => photoChangeMove(e)}
            onTouchEnd={() => photoChangeEnd()}
            style={{
              backgroundImage: `url(${images[0]})`,
              ...style,
              ...changePhotoSize(0),
            }}
          ></div>
          <div
            onTouchStart={(e) => photoChangeStart(e)}
            onTouchMove={(e) => photoChangeMove(e)}
            onTouchEnd={() => photoChangeEnd()}
            style={{
              backgroundImage: `url(${images[1]})`,
              ...style,
              ...changePhotoSize(1),
            }}
          ></div>
          <div
            onTouchStart={(e) => photoChangeStart(e)}
            onTouchMove={(e) => photoChangeMove(e)}
            onTouchEnd={() => photoChangeEnd()}
            style={{
              backgroundImage: `url(${images[2]})`,
              ...style,
              ...changePhotoSize(2),
            }}
          ></div>
          <div
            onTouchStart={(e) => photoChangeStart(e)}
            onTouchMove={(e) => photoChangeMove(e)}
            onTouchEnd={() => photoChangeEnd()}
            style={{
              backgroundImage: `url(${images[3]})`,
              ...style,
              ...changePhotoSize(3),
            }}
          ></div>
          <div
            onTouchStart={(e) => photoChangeStart(e)}
            onTouchMove={(e) => photoChangeMove(e)}
            onTouchEnd={() => photoChangeEnd()}
            style={{
              backgroundImage: `url(${images[4]})`,
              ...style,
              ...changePhotoSize(4),
            }}
          ></div>
        </div>
      </div>

      {/*sign up*/}
      <div className={styles.signUp}>
        <div className={styles.icon}>
          <img src={paperPlane} alt="paper airplane icon" />
        </div>
        <input type="text" placeholder="Enter your email" />
        <button>SIGN UP NOW</button>
        <p>
          You can unsubscribe at any time. By signing up you are agreeing to our
          <span className={styles.redWords}> Terms of Service</span> and
          <span className={styles.redWords}> Privacy Policy</span>.
        </p>
        <div className={styles.grayBackground}>
          <p>
            <span>
              Get The Brief newsletter. <br className={styles.br} />
            </span>
            Sign up to receive the top stories you need to know right now.
          </p>
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
        {/*page circles*/}
        <div className={styles.stories}>
          <p>5 STORIES</p>
          <div className={styles.storiesButton}>{climateButton}</div>
        </div>
        {/*cards*/}
        <div className={styles.wrap}>
          <div
            className={styles.dragging}
            onTouchStart={(e) =>
              handleTouchStart(e, climateMouseStartX, climateDragging)
            }
            onTouchMove={(e) =>
              handleTouchMove(
                e,
                climateDragging,
                climateCurrentX,
                climateMouseStartX,
                setClimateDraggingOffset
              )
            }
            onTouchEnd={() =>
              handleTouchEnd(
                climateDragging,
                climateCurrentX,
                setClimateCircle,
                setClimateDraggingOffset,
                climateMouseStartX,
                climateCircle
              )
            }
            style={{ transform: `translateX(${climateDraggingOffset}px)` }}
          >
            <div style={climateStyle} className={styles.climateLeftSide}>
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
              <div style={climateStyle} className={styles.card}>
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
              <div style={climateStyle} className={styles.card}>
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
              <div style={climateStyle} className={styles.card}>
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
              <div style={climateStyle} className={styles.card}>
                <div
                  className={styles.pic}
                  style={{
                    backgroundImage: `url(${images[9]})`,
                    ...style,
                    cursor: "pointer",
                  }}
                ></div>
                <p>
                  EU Climate Chief Says the EU Can Work Better With Companies
                </p>
              </div>
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
        {/*page circles*/}
        <div className={styles.stories}>
          <p>5 STORIES</p>
          <div className={styles.storiesButton}>{politicsButton}</div>
        </div>
        {/*cards*/}
        <div className={styles.wrap}>
          <div
            className={styles.dragging}
            onTouchStart={(e) =>
              handleTouchStart(e, politicsMouseStartX, politicsDragging)
            }
            onTouchMove={(e) =>
              handleTouchMove(
                e,
                politicsDragging,
                politicsCurrentX,
                politicsMouseStartX,
                setPoliticsDraggingOffset
              )
            }
            onTouchEnd={() =>
              handleTouchEnd(
                politicsDragging,
                politicsCurrentX,
                setPoliticsCircle,
                setPoliticsDraggingOffset,
                politicsMouseStartX,
                politicsCircle
              )
            }
            style={{ transform: `translateX(${politicsDraggingOffset}px)` }}
          >
            <div style={politeStyle} className={styles.politicsLeftSide}>
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
              <div style={politeStyle} className={styles.card}>
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
              <div style={politeStyle} className={styles.card}>
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
              <div style={politeStyle} className={styles.card}>
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
              <div style={politeStyle} className={styles.card}>
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
    </div>
  );
}
