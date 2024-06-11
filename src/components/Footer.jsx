import React from "react";
import styles from "../styles/footer.module.css";
import fbIcon from "../icon/fbIcon.png";
import igIcon from "../icon/igIcon.png";
import twIcon from "../icon/twIcon.png";
import pinIcon from "../icon/pinIcon.png";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <h2>TIME</h2>
      <div className={styles.wrap}>
        <div className={styles.icon}>
          <img src={fbIcon} alt="facebook icon" />
        </div>
        <div className={styles.icon}>
          <img src={igIcon} alt="instagram icon" />
        </div>
        <div className={styles.icon}>
          <img src={twIcon} alt="twitter icon" />
        </div>
        <div className={styles.icon}>
          <img src={pinIcon} alt="pinterest icon" />
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.columnsWrap}>
          <div className={styles.columns}>
            <p>Home</p>
            <p>U.S.</p>
            <p>Politics</p>
            <p>World</p>
            <p>Health</p>
            <p>Business</p>
            <p>Tech</p>
            <p>Personal Finance by TIME Stamped</p>
            <p>Shopping by TIME Stamped</p>
            <p>Future of Work by Charter</p>
          </div>
          <div className={styles.columns}>
            <p>Entertainment</p>
            <p>Ideas</p>
            <p>Science</p>
            <p>History</p>
            <p>Sports</p>
            <p>Magazine</p>
            <p>The TIME Vault</p>
            <p>TIME For Kids</p>
            <p>TIME CO2</p>
            <p>Coupons</p>
          </div>
          <div className={styles.columns}>
            <p>TIME Edge</p>
            <p>Video</p>
            <p>Masthead</p>
            <p>Newsletters</p>
            <p>Subscribe</p>
            <p>Subscribe Benefits</p>
            <p>Give a Gift</p>
            <p>Shop the TIME Store</p>
            <p>Careers</p>
            <p>Modern Slavery Statement</p>
          </div>
          <div className={styles.columns}>
            <p>Press Room</p>
            <p>TIME Studios</p>
            <p>U.S. & Canada Customer Care</p>
            <p>Global Help Center</p>
            <p>Contact the Editors</p>
            <p>Reprints and Permissions</p>
            <p>Site Map</p>
            <p>Media Kit</p>
            <p>Supplied Partner Content</p>
            <p>About us</p>
          </div>
        </div>
      </div>
      <footer>
        <p className={styles.terms}>
          © 2024 TIME USA, LLC. All Rights Reserved. Use of this site
          constitutes acceptance of our <span>Terms of Service</span>,
          <span>Privacy Policy</span> (<span>Your Privacy Rights</span>) and
          <span>Do Not Sell or Share My Personal Information.</span>
        </p>
        <p className={styles.notice}>
          TIME may receive compensation for some links to products and services
          on this website. Offers may be subject to change without notice.
        </p>
      </footer>
    </div>
  );
}
