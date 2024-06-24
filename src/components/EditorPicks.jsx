import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/EditorPicks.module.css";
import pic1 from "../icon/editorpick1.webp";
import pic2 from "../icon/editorpick2.webp";
import pic3 from "../icon/editorpick3.webp";
import pic4 from "../icon/editorpick4.webp";
import icon from "../icon/redPaperPlane.png";
import lessThanIcon from "../icon/lessThanIcon.png";
import greaterThanIcon from "../icon/greaterThanIcon.png";
import { updateDisplay, handleResize } from "../controller/functions";
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
  return (
    <div className={styles.editorPicks}>
      <div className={styles.wrap}>
        <div className={styles.title}>EDITOR'S PICKS</div>
        <div className={styles.subscribe}>
          <img src={icon} alt="red newsletter paper plane" />
          Subscribe to the Inside Time newsletter
        </div>
      </div>
      {/*main part*/}
      <div className={styles.cards}>
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
        <div style={{ ...transform }} className={styles.cardWrap}>
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${pic1})`, ...style }}
          ></div>
          <p className={styles.context}>
            The Problem With TV's Hlocaust Fixation
          </p>
        </div>
        <div style={{ ...transform }} className={styles.cardWrap}>
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${pic2})`, ...style }}
          ></div>
          <p className={styles.context}>
            Women Say They Were Pressured Into Long-Term Birth Control
          </p>
        </div>
        <div style={{ ...transform }} className={styles.cardWrap}>
          <div
            className={styles.card}
            style={{
              backgroundImage: `url(${pic3})`,
              ...style,
            }}
          ></div>
          <p className={styles.context}>How Far Trump Would Go</p>
        </div>
        <div style={{ ...transform }} className={styles.cardWrap}>
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${pic4})`, ...style }}
          ></div>
          <p className={styles.context}>
            Brittney Griner:What I Endured in Russia
          </p>
        </div>
      </div>
    </div>
  );
}
