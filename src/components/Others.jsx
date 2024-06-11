import React from "react";
import styles from "../styles/others.module.css";
import icon from "../icon/redPaperPlane.png";
export default function Others() {
  const images = [];
  for (let i = 1; i <= 24; i++) {
    images.push(require(`../icon/others${i}.webp`));
  }
  return (
    <div className={styles.others}>
      {/*health*/}
      <div className={styles.title}>
        <h3>HEALTH &gt;</h3>
        <p>
          <img src={icon} alt="red newsletter paper plane" />
          Subscribe to the Health Matters newsletter
        </p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.card}>
          <img src={images[0]} alt="" />
          <h4>How to Calm Your Fear of Flying</h4>
        </div>
        <div className={styles.card}>
          <img src={images[1]} alt="" />
          <h4>I Got Tested for Plastic. You Can Too</h4>
        </div>
        <div className={styles.card}>
          <img src={images[2]} alt="" />
          <h4>What's the Best Kind of Sunscreen?</h4>
        </div>
        <div className={styles.card}>
          <img src={images[3]} alt="" />
          <h4>No One Knows How to Talk About Weight</h4>
        </div>
        <div className={styles.card}>
          <img src={images[4]} alt="" />
          <h4>How a Dairy Worker Got Infected </h4>
        </div>
      </div>
      {/*entertainment*/}
      <div className={styles.title}>
        <h3>ENTERTAINMENT &gt;</h3>
        <p>
          <img src={icon} alt="red newsletter paper plane" />
          Subscribe to the Health Matters newsletter
        </p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.card}>
          <img src={images[5]} alt="" />
          <h4>Diddy Breaks Silence Over Video of Him Assaulting Cassie</h4>
        </div>
        <div className={styles.card}>
          <img src={images[6]} alt="" />
          <h4>
            Hollywood Pays Tribute After Celebrated Actor Dabney Coleman Dies
          </h4>
        </div>
        <div className={styles.card}>
          <img src={images[7]} alt="" />
          <h4>Man Charged in Attack on Steve Buscemi</h4>
        </div>
        <div className={styles.card}>
          <img src={images[8]} alt="" />
          <h4>Video Appears to Show Diddy Assault Cassie</h4>
        </div>
        <div className={styles.card}>
          <img src={images[9]} alt="" />
          <h4>Kinds of Kindness Is a Tedious Follow-</h4>
        </div>
      </div>
      {/*personal finance*/}
      <div className={styles.title}>
        <h3>PERSONAL FINANCE &gt;</h3>
        <p>
          <img src={icon} alt="red newsletter paper plane" />
          Subscribe to the Health Matters newsletter
        </p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.card}>
          <img src={images[10]} alt="" />
          <h4>8 Best Mint Alternatives to Replace the Budgeting App</h4>
        </div>
        <div className={styles.card}>
          <img src={images[11]} alt="" />
          <h4>Best High-Yield Savings Accounts for May 2024</h4>
        </div>
        <div className={styles.card}>
          <img src={images[12]} alt="" />
          <h4>Best 0% APR Credit Cards for May 2024</h4>
        </div>
        <div className={styles.card}>
          <img src={images[13]} alt="" />
          <h4>Best Sign-Up Bonus Credit Cards for May 2024</h4>
        </div>
        <div className={styles.card}>
          <img src={images[14]} alt="" />
          <h4>Best Pet Insurance Companies for 2024</h4>
        </div>
      </div>
      {/*future of work*/}
      <div className={styles.title}>
        <h3>FUTURE OF WORK &gt;</h3>
        <p>
          <img src={icon} alt="red newsletter paper plane" />
          Subscribe to the Health Matters newsletter
        </p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.card}>
          <img src={images[15]} alt="" />
          <h4>The Unexpected Impact of RTO Mandates on Senior Workers</h4>
        </div>
        <div className={styles.card}>
          <img src={images[16]} alt="" />
          <h4>What to do about poor quality meetings</h4>
        </div>
        <div className={styles.card}>
          <img src={images[17]} alt="" />
          <h4>The Charts Leaders Should See to Put the Office to Better Use</h4>
        </div>
        <div className={styles.card}>
          <img src={images[18]} alt="" />
          <h4>
            Why Workers Should Focus on “Durable Skills” Over “Perishable
            Skills”
          </h4>
        </div>
      </div>
      {/*shopping by timestamped*/}
      <div className={styles.title}>
        <h3>SHOPPING BY TIMESTAMPED &gt;</h3>
        <p>
          <img src={icon} alt="red newsletter paper plane" />
          Subscribe to the Health Matters newsletterv
        </p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.card}>
          <img src={images[19]} alt="" />
          <h4>What to Look for at Wayfair’s Big Spring Sale</h4>
        </div>
        <div className={styles.card}>
          <img src={images[20]} alt="" />
          <h4>
            The Best Mattresses for Side Sleepers: Which Is Right for You?
          </h4>
        </div>
        <div className={styles.card}>
          <img src={images[21]} alt="" />
          <h4>
            Best LED Face Masks for Glowing Skin in 2024, Dermatologist
            Recommended
          </h4>
        </div>
        <div className={styles.card}>
          <img src={images[22]} alt="" />
          <h4>The Best Places to Buy Glasses Online, Reviewed and Tested</h4>
        </div>
        <div className={styles.card}>
          <img src={images[23]} alt="" />
          <h4>The Best Weekender Bags for Women</h4>
        </div>
      </div>
    </div>
  );
}
