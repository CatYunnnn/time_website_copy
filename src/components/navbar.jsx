import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
const Nav = () => {
  ////側邊欄狀態
  const [sideBarStatus, setSideBarStatus] = useState("init");

  ////叉叉狀態
  const [crossIconStatus, setCrossIconStatus] = useState(false);

  ////文字狀態
  const [showText, setShowText] = useState(true);

  ////輸入框狀態
  const [showInput, setShowInput] = useState("init");

  ////側邊欄的開關
  const switchSideBar = () => {
    if (sideBarStatus === "init" || sideBarStatus === false) {
      setCrossIconStatus(true);
      setShowInput(true);
      setShowText(false);
      setSideBarStatus(true);
    } else {
      setCrossIconStatus(false);
      setShowInput(false);
      setShowText(true);
      setSideBarStatus(false);
    }
  };

  ////叉叉和文字和輸入框開關
  const textCrossSwitch = () => {
    setCrossIconStatus(!crossIconStatus);
    setShowInput(!crossIconStatus);
    setShowText(crossIconStatus);
  };
  return (
    <div>
      {/*sideBar*/}
      <div className={ sideBarStatus === "init"
              ? styles.sideBarNone
              : sideBarStatus
              ? styles.sideBar
              : styles.sideBarNone}>
        <div
          className={
            sideBarStatus === "init"
              ? styles.leftSideBarInit
              : sideBarStatus
              ? styles.leftSideBarOpen
              : styles.leftSideBarClose
          }
        >
          <div className={styles.buttons}>
            <button className={styles.sideBarSignIn}>SIGN IN</button>
            <button className={styles.sideBarSubscribe}>SUBSCRIBE</button>
          </div>
          <div className={styles.sections}>
            <h3>SECTIONS</h3>
            <div className={styles.items}>Home</div>
            <div className={styles.items}>U.S.</div>
            <div className={styles.items}>Politics</div>
            <div className={styles.items}>World</div>
            <div className={styles.items}>Health</div>
            <div className={styles.items}>Climate</div>
            <div className={styles.items}>Future of Work by Charter</div>
            <div className={styles.items}>Business</div>
            <div className={styles.items}>Tech</div>
            <div className={styles.items}>Entertainment</div>
            <div className={styles.items}>Ideas</div>
            <div className={styles.items}>Science</div>
            <div className={styles.items}>History</div>
            <div className={styles.items}>Sports</div>
            <div className={styles.items}>Magazine</div>
            <div className={styles.items}>TIME 2030</div>
            <div className={styles.items}>Next Generation Leaders</div>
            <div className={styles.items}>TIME100 Leadership Series</div>
            <div className={styles.items}>TIME Studios</div>
            <div className={styles.items}>Video</div>
            <div className={styles.items}>TIME100 Talks</div>
            <div className={styles.items}>TIMEPieces</div>
            <div className={styles.items}>The TIME Vault</div>
            <div className={styles.items}>TIME for Health</div>
            <div className={styles.items}>TIME for kids</div>
            <div className={styles.items}>TIME Edge</div>
            <div className={styles.items}>TIME CO2</div>
            <div className={styles.items}>
              Red Border: Branded Content by TIME
            </div>
            <div className={styles.items}>Coupons</div>
            <div className={styles.items}>Personal Finance by TIME Stamped</div>
            <div className={styles.items}>Shopping by TIME Stamped</div>
          </div>
          <div className={styles.sections}>
            <h3>JOIN US</h3>
          </div>
          <div className={styles.sections}>
            <h3>CUSTOMER CARE</h3>
          </div>
          <div className={styles.sections}>
            <h3>REACH OUT</h3>
          </div>
          <div className={styles.sections}>
            <h3>MORE</h3>
          </div>
          <div className={styles.sections}>
            <h3>CONNECT WITH US</h3>
          </div>
        </div>
        <div className={
            sideBarStatus === "init"
              ? styles.rightSideLight
              : sideBarStatus
              ? styles.rightSideDark
              : styles.leftSideLight
          }></div>
      </div>
      {/*top layer*/}
      <div className={styles.top}>
        <p className={styles.topText}>
          Sign Up for Our Newsletter {">"}
          {">"}
        </p>
        <h2 className={styles.title}>TIME</h2>
        <div className={styles.buttonGroup}>
          <button className={styles.subscribe}>SUBSCRIBE</button>
          <button className={styles.signIn}>SIGN IN</button>
        </div>
      </div>
      {/*bottom layer*/}
      <div className={styles.bottom}>
        <div className={styles.menu}>
          <img
            onClick={switchSideBar}
            src={
              sideBarStatus === "init"
                ? require("../icon/menu.png")
                : sideBarStatus
                ? require("../icon/close.png")
                : require("../icon/menu.png")
            }
            alt="hamburger"
          />
        </div>
        <h2
          className={
            sideBarStatus === "init"
              ? styles.title
              : sideBarStatus
              ? `${styles.titleHide} ${styles.title}`
              : styles.title
          }
        >
          TIME
        </h2>
        <p className={showText ? styles.bottomTextShow : styles.bottomTextHide}>
          SIGN UP FOR OUR IDEAS NEWSLETTER
        </p>
        <div
          className={
            showInput === "init"
              ? styles.searchIconInit
              : showInput
              ? styles.searchIconOpen
              : styles.searchIconClose
          }
        >
          <img
            onClick={textCrossSwitch}
            src={require("../icon/magnifier.png")}
            alt="magnifier"
          />
        </div>
        <input
          className={
            showInput === "init"
              ? styles.inputClose
              : showInput
              ? styles.inputOpen
              : styles.inputClose
          }
          placeholder="Search..."
          type="text"
        />
        <div
          className={
            crossIconStatus ? styles.crossIconOpen : styles.crossIconClose
          }
        >
          <img
            onClick={textCrossSwitch}
            src={require("../icon/close.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Nav;
