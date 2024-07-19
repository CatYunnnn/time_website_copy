import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/editorPicks.module.css";
import pic1 from "../icon/editorpick1.webp";
import pic2 from "../icon/editorpick2.webp";
import pic3 from "../icon/editorpick3.webp";
import pic4 from "../icon/editorpick4.webp";
import icon from "../icon/redPaperPlane.png";
import lessThanIcon from "../icon/lessThanIcon.png";
import greaterThanIcon from "../icon/greaterThanIcon.png";
import {
  updateDisplay,
  handleResize,
  changeCard,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  useIfInMobile,
} from "../controller/functions";
export default function EditorPicks() {
  const buttonLeftRef = useRef(null);
  const buttonRightRef = useRef(null);
  const blurLeft = useRef(null);
  const blurRight = useRef(null);
  const [temp, setTemp] = useState(0);
  let shortScreen = false;
  const style = {
    backgroundSize: "cover",
    backgroundPosition: "center,center",
  };
  const transform = {
    transform: `translateX(${-temp}px)`,
  };
  const offsetRight = () => {
    const width = window.innerWidth;
    if (1448 - temp - 260 < width) {
      setTemp(1420 - width);
      updateDisplay(
        true,
        false,
        true,
        false,
        buttonLeftRef,
        buttonRightRef,
        blurLeft,
        blurRight
      );
    } else {
      setTemp(temp + 260);
      updateDisplay(
        true,
        true,
        true,
        true,
        buttonLeftRef,
        buttonRightRef,
        blurLeft,
        blurRight
      );
    }
  };

  const offsetLeft = () => {
    const newTemp = temp - 260;
    if (newTemp <= 0) {
      setTemp(0);
      updateDisplay(
        false,
        true,
        false,
        true,
        buttonLeftRef,
        buttonRightRef,
        blurLeft,
        blurRight
      );
    } else {
      setTemp(newTemp);
      updateDisplay(
        true,
        true,
        true,
        true,
        buttonLeftRef,
        buttonRightRef,
        blurLeft,
        blurRight
      );
    }
  };

  useEffect(() => {
    handleResize(
      updateDisplay,
      shortScreen,
      setTemp,
      buttonLeftRef,
      buttonRightRef,
      blurLeft,
      blurRight
    );

    window.addEventListener("resize", () =>
      handleResize(
        updateDisplay,
        shortScreen,
        setTemp,
        buttonLeftRef,
        buttonRightRef,
        blurLeft,
        blurRight
      )
    );

    return () => {
      window.removeEventListener("resize", () =>
        handleResize(
          updateDisplay,
          shortScreen,
          setTemp,
          buttonLeftRef,
          buttonRightRef,
          blurLeft,
          blurRight
        )
      );
    };
  }, []);
  //////////////////mobile screen;
  const [circleBackground, setCircleBackground] = useState(0);
  const [mobileOffset, setMobileOffset] = useState("0");
  const [draggingOffset, setDraggingOffset] = useState(0);
  const isDragging = useRef(false);
  const currentX = useRef(0);
  const mouseStartX = useRef(0);
  const [ifMobile, setIfMobile] = useState(false);
  const buttons = [];
  for (let i = 0; i < 4; i++) {
    buttons.push(
      <div
        onClick={() => changeCard(i, setCircleBackground)}
        className={`${styles.circle} ${
          circleBackground === i ? styles.black : ""
        }`}
      ></div>
    );
  }
  useIfInMobile(ifMobile, setIfMobile, useEffect);
  const mobileTransform = {
    transform: `translateX(calc(-${mobileOffset}))`,
  };
  useEffect(() => {
    (() => {
      if (circleBackground === 0) {
        setMobileOffset("0%");
      } else if (circleBackground === 1) {
        setMobileOffset("90% - 8px");
      } else if (circleBackground === 3) {
        setMobileOffset("281% - 22px");
      } else {
        setMobileOffset(
          (circleBackground - 1) * 100 +
            90 +
            "% - " +
            (circleBackground * 8 + "px")
        );
      }
    })();
  }, [circleBackground]);
  return (
    <div className={styles.editorPicks}>
      <div className={styles.wrap}>
        <div className={styles.title}>EDITOR'S PICKS</div>
        <div className={styles.subscribe}>
          <img src={icon} alt="red newsletter paper plane" />
          Subscribe to the Inside Time newsletter
        </div>
      </div>
      <div className={styles.stories}>
        <p>4 STORIES</p>
        <div className={styles.storiesButton}>{buttons}</div>
      </div>
      {/*main part*/}
      <div
        className={styles.cards}
        onTouchStart={(e) => handleTouchStart(e, mouseStartX, isDragging)}
        onTouchMove={(e) =>
          handleTouchMove(
            e,
            isDragging,
            currentX,
            mouseStartX,
            setDraggingOffset
          )
        }
        onTouchEnd={() =>
          handleTouchEnd(
            isDragging,
            currentX,
            setCircleBackground,
            setDraggingOffset,
            mouseStartX,
            circleBackground
          )
        }
        style={{ transform: `translateX(${draggingOffset}px)` }}
      >
        <div
          style={{ ...(ifMobile ? mobileTransform : transform) }}
          className={styles.cardWrap}
        >
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${pic1})`, ...style }}
          ></div>
          <p className={styles.context}>
            The Problem With TV's Hlocaust Fixation
          </p>
        </div>
        <div
          style={{ ...(ifMobile ? mobileTransform : transform) }}
          className={styles.cardWrap}
        >
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${pic2})`, ...style }}
          ></div>
          <p className={styles.context}>
            Women Say They Were Pressured Into Long-Term Birth Control
          </p>
        </div>
        <div
          style={{ ...(ifMobile ? mobileTransform : transform) }}
          className={styles.cardWrap}
        >
          <div
            className={styles.card}
            style={{
              backgroundImage: `url(${pic3})`,
              ...style,
            }}
          ></div>
          <p className={styles.context}>How Far Trump Would Go</p>
        </div>
        <div
          style={{ ...(ifMobile ? mobileTransform : transform) }}
          className={styles.cardWrap}
        >
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${pic4})`, ...style }}
          ></div>
          <p className={styles.context}>
            Brittney Griner:What I Endured in Russia
          </p>
        </div>
        <div ref={blurLeft} className={styles.blurLeft}>
          <button
            ref={buttonLeftRef}
            onClick={offsetLeft}
            className={styles.buttonLeft}
          >
            <img src={lessThanIcon} alt="less than icon" />
          </button>
        </div>
        <div ref={blurRight} className={styles.blurRight}>
          <button
            ref={buttonRightRef}
            onClick={offsetRight}
            className={styles.buttonRight}
          >
            <img src={greaterThanIcon} alt="greater than icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
