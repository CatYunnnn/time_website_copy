import React from "react";
import styles from "../styles/videos.module.css";
export default function Videos() {
  return (
    <div className={styles.wrap}>
      {"main part"}
      <main className={styles.main}>
        <button className={styles.button}>VIDEO &gt;</button>
        <div className={styles.sampleVideo}></div>
        <div className={styles.introduction}>
          {"title and time"}
          <div className={styles.time}>
            <h3>2024 U.S. Total Eclipse Explained</h3>
            <footer>Feb 27,2024 | 2:13</footer>
          </div>
          {"context"}
          <div className={styles.context}>
            A rare total solar eclipse will occur across Mexico, the U.S., and
            Canada on April 8, 2024, when the moon will pass between the Earth
            and the Sun, blocking the sun's rays during the day time, causing a
            temporary period of darkness. TIME...
          </div>
        </div>
      </main>
      {"WATCH NEXT part"}
      <div className={styles.watchNext}>
        <h3 className={styles.watchNextTitle}></h3>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.video}></div>
            <div className="watchNextTime">
              <h4>2024 U.S. Total Eclipse Explained</h4>
              <footer>Feb 27,2024 | 2:13</footer>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.video}></div>
            <div className="watchNextTime">
              <h4>How AI May Meddle With The Election Year</h4>
              <footer>Feb 23,2024 | 4:21</footer>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.video}></div>
            <div className="watchNextTime">
              <h4>Issa Rae's TIME Impact Dinner:The Closers 2024 Toast</h4>
              <footer>Feb 22,2024 | 5:06</footer>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.video}></div>
            <div className="watchNextTime">
              <h4>TIME100 Leadership Series | MrBeast</h4>
              <footer>Feb 15,2024 | 4:58</footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
