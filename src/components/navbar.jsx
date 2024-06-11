import React, { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import icon from "../icon/blackPaperPlane.png";
import menuBar from "../icon/menubar.png";
import searchIcon from "../icon/searchIcon.png";
import crossIcon from "../icon/crossIcon.png";
const Navbar = () => {
  /*側邊欄是否打開*/
  const [sidebarState, setSidebarState] = useState(false);
  const [inputState, setInputState] = useState(false);
  const openSidebar = () => {
    setSidebarState(!sidebarState);
  };
  const changeInput = () => {
    setInputState(!inputState);
  };
  const closeInput = () => {
    setInputState(false);
  };
  /*監聽滑鼠滾輪來決定是否隱藏標題列*/
  const [count, setCount] = useState(0);
  const [showTitle, setShowTitle] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (sidebarState === false) {
      /*關閉input*/
      setInputState(false);
      /*讓sidebar跳出時紀錄滾動位址*/
      /*讓畫面恢復 取消固定*/
      document.body.style.position = "static";
      window.scrollTo(0, scrollPosition);

      /*當往下滾動 隱藏title欄位*/
      const ifTitleShow = (e) => {
        setCount((prevCount) => {
          let newCount = prevCount + e.deltaY;

          if (newCount >= 200) {
            newCount = 0;
            setShowTitle(false);
          } else if (newCount <= -200) {
            newCount = 0;
            setShowTitle(true);
          }

          return newCount;
        });
      };
      window.addEventListener("wheel", ifTitleShow);
      return () => {
        window.removeEventListener("wheel", ifTitleShow);
      };
    } else {
      /*開啟input*/
      setInputState(true);
      /*讓sidebar跳出時紀錄滾動位址*/
      /*在sidebar彈出時固定畫面 並保留scroll bar*/
      let temp = window.scrollY;
      setScrollPosition(window.scrollY);
      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
      document.body.style.left = "0";
      document.body.style.top = `-${temp}px`;
      document.body.style.width = "100%";
    }

    /*如果sidebarState 改變會重新偵測一次並remove舊的addeventlistener*/
  }, [sidebarState]);

  return (
    <div className={styles.navbar}>
      {/*navbar*/}
      <div className={styles.topWrap}>
        <div className={`${showTitle ? styles.title : styles.titleHide}`}>
          <p>Sign Up for Our Newsletter &gt;&gt;</p>
          <h2>TIME</h2>
          <div>
            <button>SUBSCRIBE</button>
          </div>
        </div>
        {/*sidebarHead*/}
        <div
          className={`${
            showTitle ? styles.sidebarHead : styles.sidebarHeadMove
          }`}
        >
          <p onClick={openSidebar}>
            <img src={menuBar} alt="menu bar icon" />
          </p>
          <p
            className={`${
              sidebarState ? styles.sidebarHeadPHide : styles.sidebarHeadP
            }`}
          >
            <img src={icon} alt="black newsletter paper plane" />
            SIGN UP FOR OUR ENTERTAINMENT NEWSLETTER
          </p>
          <p>
            <img
              onClick={changeInput}
              className={`${
                inputState ? styles.searchIconMove : styles.searchIcon
              }`}
              src={searchIcon}
              alt="search icon"
            />
            <input
              className={`${
                inputState ? styles.sidebarInputMove : styles.sidebarInput
              }`}
              placeholder="Search..."
              type="text"
            />
            <img
              onClick={closeInput}
              className={`${
                inputState ? styles.crossIconShow : styles.crossIconHide
              }`}
              src={crossIcon}
              alt="cross icon"
            />
          </p>
        </div>
      </div>

      <div
        className={`${
          sidebarState === true ? styles.sidebar : styles.sidebarClose
        } ${showTitle === true ? "" : styles.sidebarLong}`}
      >
        <div className={styles.topicGroup}>
          <h3>SECTIONS</h3>
          <button>Home</button>
          <button>U.S.</button>
          <button>Politics</button>
          <button>World</button>
          <button>Health</button>
          <button>Climate</button>
          <button>Future of Work by Charter</button>
          <button>Business</button>
          <button>Tech</button>
          <button>Entertainment</button>
          <button>Ideas</button>
          <button>Science</button>
          <button>History</button>
          <button>Sports</button>
          <button>Magazine</button>
          <button>TIME 2030</button>
          <button>Next Generation Leaders</button>
          <button>TIME100 Leadership Series</button>
          <button>TIME Studios</button>
          <button>Video</button>
          <button>TIME100 Talks</button>
          <button>TIMEPieces</button>
          <button>The TIME Vault</button>
          <button>TIME for Health</button>
          <button>TIME for Kids</button>
          <button>TIME Edge</button>
          <button>TIME CO2</button>
          <button>Red Border:Branded Content by TIME</button>
          <button>Coupons</button>
          <button>Personal Finance by TIME Stamped</button>
          <button>Shopping by TIME Stamped</button>
        </div>
        <div className={styles.topicGroup}>
          <h3>JOIN US</h3>
          <button>Newsletters</button>
          <button>Subscribe</button>
          <button>Give a Gift</button>
          <button>Shop the TIME Store</button>
          <button>TIME Cover Store</button>
        </div>
        <div className={styles.topicGroup}>
          <h3>CUSTOMER CARE</h3>
          <button>US & Canada</button>
          <button>Global Help Center</button>
        </div>
        <div className={styles.topicGroup}>
          <h3>REACH OUT</h3>
          <button>Careers</button>
          <button>Press Room</button>
          <button>Contact the Editors</button>
          <button>Media Kit</button>
          <button>Reprints and Permissions</button>
        </div>
        <div className={styles.topicGroup}>
          <h3>MORE</h3>
          <button>About Us</button>
          <button>Privacy Policy</button>
          <button>Your Privacy Rights</button>
          <button>Terms of Use</button>
          <button>Modern Slavery Statement</button>
          <button>Site Map</button>
        </div>
        <div className={styles.connectWithUs}>
          <h3>CONNECT WITH US</h3>
          <div className={styles.wrap}>
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
          </div>
        </div>
      </div>
      <div
        onClick={openSidebar}
        className={`${
          sidebarState === true ? styles.sidebarAfter : styles.sidebarAfterClose
        } ${showTitle === true ? "" : styles.sidebarAfterLong}`}
      ></div>
    </div>
  );
};
export default Navbar;
