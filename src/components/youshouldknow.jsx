import React from "react";
import styles from "../styles/youshouldknow.module.css";
import photo1 from "../icon/youshouldknow1.webp";
import photo2 from "../icon/youshouldknow2.webp";
import photo3 from "../icon/youshouldknow3.webp";
import photo4 from "../icon/youshouldknow4.webp";
import photo5 from "../icon/youshouldknow5.webp";
export default function YouShouldKnow() {
  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>You Should Know</h2>
      <div className={styles.cardGroups}>
        <div
          className={styles.card}
          style={{
            backgroundImage: `url(${photo1})`,
            backgroundSize: "cover",
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
            backgroundSize: "cover",
          }}
        >
          <h3 className={styles.h3}>COCO GRAUFF</h3>
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
            backgroundSize: "cover",
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
            backgroundSize: "cover",
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
            backgroundSize: "cover",
          }}
        >
          <h3 className={styles.h3}>MUSIC</h3>
          <div className={styles.content}>Dua Lipa Manifested All of This</div>
          <footer className={styles.footer}>Racchel Brodsky</footer>
        </div>
      </div>
    </main>
  );
}
