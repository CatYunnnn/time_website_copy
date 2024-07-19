import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/youshouldknow.module.css";
import photo1 from "../icon/youshouldknow1.webp";
import photo2 from "../icon/youshouldknow2.webp";
import photo3 from "../icon/youshouldknow3.webp";
import photo4 from "../icon/youshouldknow4.webp";
import photo5 from "../icon/youshouldknow5.webp";
import greaterThanIcon from "../icon/greaterThanIcon.png";
import lessThanIcon from "../icon/lessThanIcon.png";
import {
  updateDisplay,
  handleResize,
  offsetLeft,
  offsetRight,
  useEffectCallBack,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  changeCard,
  useIfInMobile,
} from "../controller/functions";
export default function YouShouldKnow() {
  const buttonLeftRef = useRef(null);
  const buttonRightRef = useRef(null);
  const blurLeft = useRef(null);
  const blurRight = useRef(null);
  const [offset, setOffset] = useState(0);
  let shortScreen = false;
  const style = {
    backgroundSize: "cover",
    backgroundPosition: "center,center",
  };
  const transform = {
    transform: `translateX(${-offset}px)`,
  };
  useEffectCallBack(
    useEffect,
    handleResize,
    updateDisplay,
    shortScreen,
    setOffset,
    buttonLeftRef,
    buttonRightRef,
    blurLeft,
    blurRight
  );
  ///////////mobile screen
  const [mobileOffset, setMobileOffset] = useState("0%");
  const [ifMobile, setIfMobile] = useState(false);
  const [circleBackground, setCircleBackground] = useState(0);
  const [draggingOffset, setDraggingOffset] = useState(0);
  const isDragging = useRef(false);
  const mouseStartX = useRef(0);
  const dragCard = useRef(null);
  const currentX = useRef(0);
  const mobileTransform = {
    transform: `translateX(calc(-${mobileOffset}))`,
  };
  useIfInMobile(ifMobile, setIfMobile, useEffect);
  useEffect(() => {
    (() => {
      if (circleBackground === 0) {
        setMobileOffset("0%");
      } else if (circleBackground === 1) {
        setMobileOffset("91% - 8px");
      } else if (circleBackground === 4) {
        setMobileOffset("381% - 32px");
      } else {
        setMobileOffset(
          (circleBackground - 1) * 100 +
            91 +
            "% - " +
            (circleBackground * 8 + "px")
        );
      }
    })();
  }, [circleBackground]);
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
  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>YOU SHOULD KNOW</h2>
      {/*when screen < 768px*/}
      <div className={styles.stories}>
        <p>5 STORIES</p>
        <div className={styles.storiesButton}>{buttons}</div>
      </div>
      {/*cards*/}
      <div className={styles.cardGroups}>
        <div ref={blurLeft} className={styles.blur}>
          <button
            ref={buttonLeftRef}
            onClick={() =>
              offsetLeft(
                offset,
                setOffset,
                updateDisplay,
                buttonLeftRef,
                buttonRightRef,
                blurLeft,
                blurRight
              )
            }
            className={styles.leftButton}
          >
            <img src={lessThanIcon} alt="less than icon" />
          </button>
        </div>
        <div className={styles.aspectRatio}>
          <div
            ref={dragCard}
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
            className={styles.cardWrap}
            style={{ transform: `translateX(${draggingOffset}px)` }}
          >
            <div
              className={`${styles.card} ${styles.firstCard}`}
              style={{
                backgroundImage: `url(${photo1})`,
                ...style,
                ...(ifMobile ? mobileTransform : transform),
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
                ...(ifMobile ? mobileTransform : transform),
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
                ...(ifMobile ? mobileTransform : transform),
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
                ...(ifMobile ? mobileTransform : transform),
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
                ...(ifMobile ? mobileTransform : transform),
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
            onClick={() =>
              offsetRight(
                offset,
                setOffset,
                updateDisplay,
                buttonLeftRef,
                buttonRightRef,
                blurLeft,
                blurRight
              )
            }
            className={styles.rightButton}
          >
            <img src={greaterThanIcon} alt="greater than icon" />
          </button>
        </div>
      </div>
    </main>
  );
}
