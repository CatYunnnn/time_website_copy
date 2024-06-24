import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/youshouldknow.module.css";
import photo1 from "../icon/youshouldknow1.webp";
import photo2 from "../icon/youshouldknow2.webp";
import photo3 from "../icon/youshouldknow3.webp";
import photo4 from "../icon/youshouldknow4.webp";
import photo5 from "../icon/youshouldknow5.webp";
import greaterThanIcon from "../icon/greaterThanIcon.png";
import lessThanIcon from "../icon/lessThanIcon.png";
import { updateDisplay, handleResize } from "../controller/functions";
export default function YouShouldKnow() {
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
    if (1448 - temp - 240 < width) {
      setTemp(1466 - width);
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
      setTemp(temp + 240);
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
    const newTemp = temp - 240;
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
    <main className={styles.main}>
      <h2 className={styles.h2}>YOU SHOULD KNOW</h2>
      <div className={styles.cardGroups}>
        <div ref={blurLeft} className={styles.blur}>
          <button
            ref={buttonLeftRef}
            onClick={offsetLeft}
            className={styles.leftButton}
          >
            <img src={lessThanIcon} alt="less than icon" />
          </button>
        </div>
        <div className={styles.aspectRatio}>
          <div className={styles.cardWrap}>
            {" "}
            <div
              className={`${styles.card} ${styles.firstCard}`}
              style={{
                backgroundImage: `url(${photo1})`,
                ...style,
                ...transform,
              }}
            >
              <h3 className={styles.h3}>ACTIVISM</h3>
              <div className={styles.content}>
                Jane Fonda Champions Climate Action for Every Generation
              </div>
              <footer className={styles.footer}>Stphanie Zacharek</footer>
            </div>
            <div
              className={styles.card}
              style={{
                backgroundImage: `url(${photo2})`,
                ...style,
                ...transform,
              }}
            >
              <h3 className={styles.h3}>GOLF</h3>
              <div className={styles.content}>
                Coco Gauff Is Playing for Herself Now
              </div>
              <footer className={styles.footer}>
                Sean Gregory / Indian Wells, Calif.
              </footer>
            </div>
            <div
              className={styles.card}
              style={{
                backgroundImage: `url(${photo3})`,
                ...style,
                ...transform,
              }}
            >
              <h3 className={styles.h3}>FOOTBALL</h3>
              <div className={styles.content}>
                Patrick Mahomes Is Rewriting the Playbook
              </div>
              <footer className={styles.footer}>Sean Gregory / Dallas</footer>
            </div>
            <div
              className={styles.card}
              style={{
                backgroundImage: `url(${photo4})`,
                ...style,
                ...transform,
              }}
            >
              <h3 className={styles.h3}>RUSSIA</h3>
              <div className={styles.content}>
                The Revolution of Yulia Navalnaya
              </div>
              <footer className={styles.footer}>Simon Shuster / Vilnius</footer>
            </div>
            <div
              className={styles.card}
              style={{
                backgroundImage: `url(${photo5})`,
                ...style,
                ...transform,
              }}
            >
              <h3 className={styles.h3}>MUSIC</h3>
              <div className={styles.content}>
                Dua Lipa Manifested All of This
              </div>
              <footer className={styles.footer}>Racchel Brodsky</footer>
            </div>
          </div>
        </div>

        <div ref={blurRight} className={styles.blurRight}>
          <button
            ref={buttonRightRef}
            onClick={offsetRight}
            className={styles.rightButton}
          >
            <img src={greaterThanIcon} alt="greater than icon" />
          </button>
        </div>
      </div>
    </main>
  );
}
