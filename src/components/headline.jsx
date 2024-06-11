import React from "react";
import styles from "../styles/headline.module.css";
const Headline = () => {
  return (
    <main className={styles.main}>
      {/*新聞圖片*/}
      <div>
        {/*主圖*/}
        <div className={styles.bigPhotos}>
          <div className={styles.wrap}>
            <p className={styles.bigPhotoTitle}>
              Inside The Nuclear Fusion Facility That Changed the World
            </p>
            <p className={styles.timeToRead} style={{ paddingLeft: "14px" }}>
              21 MIN READ
            </p>
            <p className={styles.bigPhotoContentTime}>
              JANUARY 8, 2024.10:59 AM EST
            </p>
            <p className={styles.bigPhotoContent}>
              TIME followed government scientists in the year after they
              achieved the biggest scientific breakthrough of the decade.
            </p>
          </div>
          <img
            className={styles.bigPhoto}
            src={require("../icon/bigPhoto.webp")}
            alt=""
          />
          <div className={styles.sign}>Balazs Gardi for TIME</div>
        </div>
        {/*三個小圖*/}
        <div className={styles.smallPhotos}>
          <div className={styles.smallPhotoGroup}>
            <img
              className={styles.smallPhoto}
              src={require("../icon/smallPhoto1.webp")}
              alt="firstPicture"
            />
            <p className={styles.smallPhotoContent}>
              What Is COVID-19's Incubation Period?
            </p>
            <p className={styles.timeToRead}>28 MIN READ</p>
            <p className={styles.time}>JANUARY 9, 2024.12:16 PM EST</p>
          </div>
          <div className={styles.smallPhotoGroup}>
            <img
              className={styles.smallPhoto}
              src={require("../icon/smallPhoto2.webp")}
              alt="secondPicture"
            />
            <p className={styles.smallPhotoContent}>
              Adan Canto Is Remembered By His 'Designated Survivor' CoStars and
              Peers
            </p>
            <p className={styles.timeToRead}>5 MIN READ</p>
            <p className={styles.time}>JANUARY 10, 2024.8:15 AM EST</p>
          </div>
          <div className={styles.smallPhotoGroup}>
            <img
              className={styles.smallPhoto}
              src={require("../icon/smallPhoto3.webp")}
              alt="thirdPicture"
            />
            <p className={styles.smallPhotoContent}>
              Trump Distorts His Impeachment History
            </p>
            <p className={styles.timeToRead}>13 MIN READ</p>
            <p className={styles.time}>JANUARY 9, 2024.6:28 PM EST</p>
          </div>
        </div>
      </div>
      {/*右邊文字*/}
      <div className={styles.textArea}>
        <h3 className={styles.articleTitle}>MOST READ</h3>
        <article className={styles.article}>
          <h4>1 </h4>
          <div>
            <p className={styles.type}>ENTERTAINMENT</p>
            <p className={styles.articleContent}>
              The Golden Globes <br />
              Monologue Was Bad__But <br />
              One Joke in Particular Sank <br />
              Jo Koy
            </p>
            <p className={styles.timeToRead}>3 MIN READ</p>
          </div>
        </article>
        <article className={styles.article}>
          <h4>2 </h4>
          <div>
            <p className={styles.type}>ENTERTAINMENT</p>
            <p className={styles.articleContent}>
              The Golden Globes <br />
              Monologue Was Bad__But <br />
              One Joke in Particular Sank <br />
              Jo Koy
            </p>
            <p className={styles.timeToRead}>7 MIN READ</p>
          </div>
        </article>
        <article className={styles.article}>
          <h4>3 </h4>
          <div>
            <p className={styles.type}>ENTERTAINMENT</p>
            <p className={styles.articleContent}>
              Everything You Need to <br /> Know About the 2024 <br /> Golden
              Globes
            </p>
            <p className={styles.timeToRead}>6 MIN READ</p>
          </div>
        </article>
        <article className={styles.article}>
          <h4>4 </h4>
          <div>
            <p className={styles.type}>POLITICS</p>
            <p className={styles.articleContent}>
              The Golden Globes <br />
              Monologue Was Bad__But <br />
              One Joke in Particular Sank <br />
              Jo Koy
            </p>
            <p className={styles.timeToRead}>4 MIN READ</p>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Headline;
