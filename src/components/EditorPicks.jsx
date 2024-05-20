import React from "react";
import styles from "../styles/EditorPicks.module.css";
import pic1 from "../icon/editorpick1.webp";
import pic2 from "../icon/editorpick2.webp";
import pic3 from "../icon/editorpick3.webp";
import pic4 from "../icon/editorpick4.webp";
export default function EditorPicks() {
  return (
    <div className={styles.editorPicks}>
      <div className={styles.wrap}>
        <div className={styles.title}>EDITOR'S PICKS</div>
        <div className={styles.subscribe}>
          Subscribe to the Inside Time newsletter
        </div>
      </div>
      <div className={styles.cards}>
        <div>
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${pic1})`, backgroundSize: "cover" }}
          ></div>
          <p className={styles.context}>
            The Problem With TV's Hlocaust Fixation
          </p>
        </div>
        <div>
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${pic2})`, backgroundSize: "cover" }}
          ></div>
          <p>Women Say They Were Pressured Into Long-Term Birth Control</p>
        </div>
        <div>
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${pic3})`, backgroundSize: "cover" }}
          ></div>
          <p>How Far Trump Would Go</p>
        </div>
        <div>
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${pic4})`, backgroundSize: "cover" }}
          ></div>
          <p>Brittney Griner:What I Endured in Russia</p>
        </div>
      </div>
    </div>
  );
}
