import React, { useState, useRef } from "react";
import styles from "../styles/videos.module.css";
import pic1 from "../icon/videosImg1.jpg";
import pic2 from "../icon/videosImg2.jpg";
import pic3 from "../icon/videosImg3.jpg";
import pic4 from "../icon/videosImg4.jpg";
export default function Videos() {
  const videos = [
    "https://www.youtube.com/embed/i26VeJ49QsE?si=xFQAcCEoNdP41YsU",
    "https://www.youtube.com/embed/PU3G4xCIxVI?si=xpsgq16wrc1FH61Z",
    "https://www.youtube.com/embed/K4-tXNKiWGQ?si=b4RIsU3tj-SvT-EQ",
    "https://www.youtube.com/embed/xZlx_FdLKIk?si=Y9vKrQEsxxgZtPRU",
  ];
  const [playingNow, setPlayingNow] = useState(0);
  const [offset, setOffset] = useState(0);
  const offsetEnd = useRef(0);
  const isDragging = useRef(false);
  const touchStartX = useRef(0);
  const currentX = useRef(0);
  const translate = { transform: `translateX(${offset}px)` };
  const addToPlaying = (index) => {
    setPlayingNow(index);
  };
  const handleTouchStart = function (e) {
    const width = window.innerWidth;
    if (width >= 768) return;
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    isDragging.current = true;
  };
  const handleTouchMove = function (e) {
    if (!isDragging.current) return;
    const width = window.innerWidth;
    const touch = e.touches[0];
    currentX.current = touch.clientX;
    if (offsetEnd.current + (currentX.current - touchStartX.current) >= 0) {
      offsetEnd.current = 0;
      setOffset(0);
    } else if (
      offsetEnd.current + (currentX.current - touchStartX.current) <=
      -(750 - width + 60)
      /////////60為左右寬度 這裡算的是最大向左滑動距離
    ) {
      offsetEnd.current = -(750 - width + 60);
      setOffset(-(750 - width + 60));
    } else {
      setOffset(offsetEnd.current + (currentX.current - touchStartX.current));
    }
  };
  const handleTouchEnd = function (e) {
    if (!isDragging.current) return;
    isDragging.current = false;
    offsetEnd.current += currentX.current - touchStartX.current;
  };
  return (
    <div className={styles.wrap}>
      {/*main part*/}
      <main className={styles.main}>
        <button className={styles.button}>VIDEO &gt;</button>
        <div className={styles.sampleVideo}>
          <iframe
            width="782"
            height="440"
            src={playingNow === 0 ? videos[0] : videos[playingNow - 1]}
            style={{ border: "0" }}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className={styles.introduction}>
            <div className={styles.time}>
              <h3>2024 U.S. Total Eclipse Explained</h3>
              <footer>Feb 27,2024 | 2:13</footer>
            </div>
            {/*context */}
            <div className={styles.context}>
              A rare total solar eclipse will occur across Mexico, the U.S., and
              Canada on April 8, 2024, when the moon will pass between the Earth
              and the Sun, blocking the sun's rays during the day time, causing
              a temporary period of darkness. TIME...
            </div>
          </div>
        </div>
        {/*title and time */}
      </main>
      {/*watch next part */}
      <div className={styles.watchNext}>
        <h3 className={styles.watchNextTitle}>WATCH NEXT</h3>
        {/*cards */}
        <div
          className={styles.cards}
          style={translate}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchEnd={() => handleTouchEnd()}
        >
          <div className={styles.card}>
            <div
              className={`${styles.video} ${
                playingNow === 1 || playingNow === 0 ? styles.playingNow : ""
              }`}
              style={{
                backgroundImage: `url(${pic1})`,
                backgroundSize: "cover",
              }}
              onClick={() => addToPlaying(1)}
            ></div>
            <div className={styles.watchNextTitleAndTime}>
              <h4>2024 U.S. Total Eclipse Explained</h4>
              <footer>Feb 27,2024 | 2:13</footer>
            </div>
          </div>
          <div className={styles.card}>
            <div
              className={`${styles.video} ${
                playingNow === 2 ? styles.playingNow : ""
              }`}
              style={{
                backgroundImage: `url(${pic2})`,
                backgroundSize: "cover",
              }}
              onClick={() => addToPlaying(2)}
            ></div>
            <div className={styles.watchNextTitleAndTime}>
              <h4>How AI May Meddle With The Election Year</h4>
              <footer>Feb 23,2024 | 4:21</footer>
            </div>
          </div>
          <div className={styles.card}>
            <div
              className={`${styles.video} ${
                playingNow === 3 ? styles.playingNow : ""
              }`}
              style={{
                backgroundImage: `url(${pic3})`,
                backgroundSize: "cover",
              }}
              onClick={() => addToPlaying(3)}
            ></div>
            <div className={styles.watchNextTitleAndTime}>
              <h4>Issa Rae's TIME Impact Dinner:The Closers 2024 Toast</h4>
              <footer>Feb 22,2024 | 5:06</footer>
            </div>
          </div>
          <div className={styles.card}>
            <div
              className={`${styles.video} ${
                playingNow === 4 ? styles.playingNow : ""
              }`}
              style={{
                backgroundImage: `url(${pic4})`,
                backgroundSize: "cover",
              }}
              onClick={() => addToPlaying(4)}
            ></div>
            <div className={styles.watchNextTitleAndTime}>
              <h4>TIME100 Leadership Series | MrBeast</h4>
              <footer>Feb 15,2024 | 4:58</footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
