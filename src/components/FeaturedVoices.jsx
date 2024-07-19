import React, { useState, useRef } from "react";
import styles from "../styles/featuredVoices.module.css";
import pic from "../icon/featuredVoices1.webp";
export default function FeaturedVoices() {
  const [offset, setOffset] = useState(0);
  const offsetEnd = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);
  const touchStartX = useRef(0);
  const transform = { transform: `translateX(${offset}px)` };
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
      -(800 - width + 30)
      /////////60為左右寬度 這裡算的是最大向左滑動距離
    ) {
      offsetEnd.current = -(800 - width + 30);
      setOffset(-(800 - width + 30));
    } else {
      setOffset(offsetEnd.current + (currentX.current - touchStartX.current));
    }
  };
  const handleTouchEnd = function () {
    if (!isDragging.current) return;
    isDragging.current = false;
    offsetEnd.current += currentX.current - touchStartX.current;
    console.log(offsetEnd.current);
  };
  return (
    <div>
      <main className={styles.wrap}>
        {/*left side*/}
        <div className={styles.mainTopics}>
          <h2>FEATURED VOICES</h2>
          <div className={styles.cards}>
            <div
              className={styles.card}
              onTouchStart={(e) => handleTouchStart(e)}
              onTouchMove={(e) => handleTouchMove(e)}
              onTouchEnd={() => handleTouchEnd()}
              style={transform}
            >
              <h3>Steve Tsang</h3>
              <p>What Xi Jinping Really Thinks</p>
            </div>
            <div
              className={styles.card}
              onTouchStart={(e) => handleTouchStart(e)}
              onTouchMove={(e) => handleTouchMove(e)}
              onTouchEnd={() => handleTouchEnd()}
              style={transform}
            >
              <h3>Hoda Sherif</h3>
              <p>
                Covering Columbia's Student Protests Gave Me Hope About
                Journalism's Future
              </p>
            </div>
            <div
              className={styles.card}
              onTouchStart={(e) => handleTouchStart(e)}
              onTouchMove={(e) => handleTouchMove(e)}
              onTouchEnd={() => handleTouchEnd()}
              style={transform}
            >
              <h3>Tiffany Nicole and Abigail Glasgow</h3>
              <p>How Can I Be Free When My Child Is Incarcerated?</p>
            </div>
            <div
              className={styles.card}
              onTouchStart={(e) => handleTouchStart(e)}
              onTouchMove={(e) => handleTouchMove(e)}
              onTouchEnd={() => handleTouchEnd()}
              style={transform}
            >
              <h3>Ian Bremmer</h3>
              <p>How Marine Le Pen Could Become France's Prime Minister</p>
            </div>
          </div>
        </div>
        {/*right side*/}
        <div className={styles.latestStories}>
          <h3 className={styles.latestStoriesTopic}>LATEST STORIES</h3>
          <div className={styles.story}>
            <h3 className={styles.storyTopic}>
              AstraZeneca to Build $1.5 Billion Drugs Factory in Singapore
            </h3>
            <p className={styles.timeToRead}>2 MIN READ</p>
            <footer className={styles.time}>MAY 20, 2024 • 4:50 AM EDT</footer>
          </div>
          <div className={styles.story}>
            <h3 className={styles.storyTopic}>
              Taiwan's New President Preaches Harmony and Highlights Divisions
              With
            </h3>
            <p className={styles.timeToRead}>6 MIN READ</p>
            <footer className={styles.time}>MAY 20, 2024 • 4:00 AM EDT</footer>
          </div>
          <div className={styles.story}>
            <h3 className={styles.storyTopic}>
              Jim Otto, Legendary Raiders Football Player, Dies at 86
            </h3>
            <p className={styles.timeToRead}>4 MIN READ</p>
            <footer className={styles.time}>MAY 20, 2024 • 2:20 AM EDT</footer>
          </div>
          <div className={styles.story}>
            <h3 className={styles.storyTopic}>
              Who Will Lead Iran After President Raisi's Death?
            </h3>
            <p className={styles.timeToRead}>4 MIN READ</p>
            <footer className={styles.time}>MAY 20, 2024 • 2:05 AM EDT</footer>
          </div>
          <div className={styles.story}>
            <h3 className={styles.storyTopic}>
              The List of Potential Suspects in the Death of Iran's President
              Raisi
            </h3>
            <p className={styles.timeToRead}>5 MIN READ</p>
            <footer className={styles.time}>MAY 20, 2024 • 1:00 AM EDT</footer>
          </div>
          <div className={styles.story}>
            <h3 className={styles.storyTopic}>
              Saudi Crown Prince to Postpones Japan Trip Amid Concerns Over...
            </h3>
            <p className={styles.timeToRead}>3 MIN READ</p>
            <footer className={styles.time}>MAY 20, 2024 • 12:55 AM EDT</footer>
          </div>
        </div>
      </main>
      {/*bottom side*/}
      <div className={styles.subscribe}>
        <img
          className={styles.magazinePhoto}
          src={pic}
          style={{
            backgroundPosition: "650px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center,center",
          }}
          alt="megazine photo"
        />
        <h3>
          Subscirbe now to get unlimited access to <span>TIME.com</span> and
          more!
        </h3>
        <p>
          <span></span>2024 Digital Magazine
        </p>
        <p>
          <span></span>Inside TIME Newsletter,emailed twice weekly
        </p>
        <p>
          <span></span>Discounts at the TIME Cover Store
        </p>
        <button>SUBSCRIBE NOW</button>
      </div>
    </div>
  );
}
