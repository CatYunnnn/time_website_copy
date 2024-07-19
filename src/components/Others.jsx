import React, { useState, useEffect, useRef, createRef } from "react";
import styles from "../styles/others.module.css";
import icon from "../icon/redPaperPlane.png";
import lessThanIcon from "../icon/lessThanIcon.png";
import greaterThanIcon from "../icon/greaterThanIcon.png";
import {
  updateDisplay,
  offsetLeft,
  offsetRight,
  handleResize,
  useEffectCallBack,
  changeCard,
  useIfInMobile,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
} from "../controller/functions";
export default function Others() {
  const images = [];
  for (let i = 1; i <= 24; i++) {
    images.push(require(`../icon/others${i}.webp`));
  }
  function useCreateRef() {
    const [offset, setOffset] = useState(0);
    return {
      blurLeft: useRef(null),
      blurRight: useRef(null),
      buttonLeft: useRef(null),
      buttonRight: useRef(null),
      offset: offset,
      setOffset: setOffset,
      transform: `translateX(${-offset}px)`,
    };
  }
  let shortScreen = false;
  /*for useEffectCallBack*/
  const commonConfig = [useEffect, handleResize, updateDisplay, shortScreen];
  /*different part*/
  const health = useCreateRef();
  const entertainment = useCreateRef();
  const personalFinance = useCreateRef();
  const future = useCreateRef();
  const shopping = useCreateRef();
  useEffectCallBack(
    ...commonConfig,
    health.setOffset,
    health.buttonLeft,
    health.buttonRight,
    health.blurLeft,
    health.blurRight
  );
  useEffectCallBack(
    ...commonConfig,
    entertainment.setOffset,
    entertainment.buttonLeft,
    entertainment.buttonRight,
    entertainment.blurLeft,
    entertainment.blurRight
  );
  useEffectCallBack(
    ...commonConfig,
    personalFinance.setOffset,
    personalFinance.buttonLeft,
    personalFinance.buttonRight,
    personalFinance.blurLeft,
    personalFinance.blurRight
  );
  useEffectCallBack(
    ...commonConfig,
    future.setOffset,
    future.buttonLeft,
    future.buttonRight,
    future.blurLeft,
    future.blurRight
  );
  useEffectCallBack(
    ...commonConfig,
    shopping.setOffset,
    shopping.buttonLeft,
    shopping.buttonRight,
    shopping.blurLeft,
    shopping.blurRight
  );
  /*mobile*/
  const [ifMobile, setIfMobile] = useState(false);
  useIfInMobile(ifMobile, setIfMobile, useEffect);
  const makeCircle = function (
    index,
    buttons,
    circleBackground,
    setCircleBackground
  ) {
    for (let i = 0; i < index; i++) {
      buttons.push(
        <div
          onClick={() => changeCard(i, setCircleBackground)}
          className={`${styles.circle} ${
            circleBackground === i ? styles.black : ""
          }`}
        ></div>
      );
    }
    return buttons;
  };
  /*health*/
  const [healthCircle, setHealthCircle] = useState(0);
  const healthButton = makeCircle(5, [], healthCircle, setHealthCircle);
  const [healthMobileOffset, setHealthMobileOffset] = useState(0);
  const healthMobileTransform = {
    transform: `translateX(calc(-${healthMobileOffset}))`,
  };
  const [healthDraggingOffset, setHealthDraggingOffset] = useState(0);
  const healthDraggingTransform = {
    transform: `translateX(calc(${healthDraggingOffset}px))`,
  };
  /*entertainment*/
  const [entertainmentCircle, setEntertainmentCircle] = useState(0);
  const entertainmentButton = makeCircle(
    5,
    [],
    entertainmentCircle,
    setEntertainmentCircle
  );
  const [entertainmentMobileOffset, setEntertainmentMobileOffset] = useState(0);
  const entertainmentMobileTransform = {
    transform: `translateX(calc(-${entertainmentMobileOffset}))`,
  };
  const [entertainmentDraggingOffset, setEntertainmentDraggingOffset] =
    useState(0);
  const entertainmentDraggingTransform = {
    transform: `translateX(calc(${entertainmentDraggingOffset}px))`,
  };
  /*finance*/
  const [financeCircle, setFinanceCircle] = useState(0);
  const financeButton = makeCircle(5, [], financeCircle, setFinanceCircle);
  const [financeMobileOffset, setFinanceMobileOffset] = useState(0);
  const financeMobileTransform = {
    transform: `translateX(calc(-${financeMobileOffset}))`,
  };
  const [financeDraggingOffset, setFinanceDraggingOffset] = useState(0);
  const financeDraggingTransform = {
    transform: `translateX(calc(${financeDraggingOffset}px))`,
  };
  /*future*/
  const [futureCircle, setFutureCircle] = useState(0);
  const futureButton = makeCircle(4, [], futureCircle, setFutureCircle);
  const [futureMobileOffset, setFutureMobileOffset] = useState(0);
  const futureMobileTransform = {
    transform: `translateX(calc(-${futureMobileOffset}))`,
  };
  const [futureDraggingOffset, setFutureDraggingOffset] = useState(0);
  const futureDraggingTransform = {
    transform: `translateX(calc(${futureDraggingOffset}px))`,
  };
  /*shopping*/
  const [shoppingCircle, setShoppingCircle] = useState(0);
  const shoppingButton = makeCircle(5, [], shoppingCircle, setShoppingCircle);
  const [shoppingMobileOffset, setShoppingMobileOffset] = useState(0);
  const shoppingMobileTransform = {
    transform: `translateX(calc(-${shoppingMobileOffset}))`,
  };
  const [shoppingDraggingOffset, setShoppingDraggingOffset] = useState(0);
  const shoppingDraggingTransform = {
    transform: `translateX(calc(${shoppingDraggingOffset}px))`,
  };
  /*dragging*/
  const isDragging = useRef(false);
  const currentX = useRef(0);
  const touchStartX = useRef(0);
  /**/
  const calculateMobileOffset = (circleBackground) => {
    if (circleBackground === 0) {
      return "0%";
    } else if (circleBackground === 1) {
      return "90%";
    } else if (circleBackground === 4) {
      return "390% + 16px";
    } else {
      return (
        (circleBackground - 1) * 100 +
        90 +
        "% - " +
        ((circleBackground - 1) * 8 + "px")
      );
    }
  };
  useEffect(() => {
    setHealthMobileOffset(calculateMobileOffset(healthCircle));
  }, [healthCircle]);
  useEffect(() => {
    setEntertainmentMobileOffset(calculateMobileOffset(entertainmentCircle));
  }, [entertainmentCircle]);
  useEffect(() => {
    setFinanceMobileOffset(calculateMobileOffset(financeCircle));
  }, [financeCircle]);
  useEffect(() => {
    setFutureMobileOffset(calculateMobileOffset(futureCircle));
  }, [futureCircle]);
  useEffect(() => {
    setShoppingMobileOffset(calculateMobileOffset(shoppingCircle));
  }, [shoppingCircle]);
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
      {/*circles*/}
      <div className={styles.stories}>
        <p>5 STORIES</p>
        <div className={styles.storiesButton}>{healthButton}</div>
      </div>
      <div className={styles.wrap}>
        {/*blur and button*/}
        <div ref={health.blurLeft} className={styles.blurLeft}>
          <button
            ref={health.buttonLeft}
            onClick={() =>
              offsetLeft(
                health.offset,
                health.setOffset,
                updateDisplay,
                health.buttonLeft,
                health.buttonRight,
                health.blurLeft,
                health.blurRight
              )
            }
            className={styles.buttonLeft}
          >
            <img src={lessThanIcon} alt="less than icon" />
          </button>
        </div>
        <div ref={health.blurRight} className={styles.blurRight}>
          <button
            ref={health.buttonRight}
            onClick={() =>
              offsetRight(
                health.offset,
                health.setOffset,
                updateDisplay,
                health.buttonLeft,
                health.buttonRight,
                health.blurLeft,
                health.blurRight
              )
            }
            className={styles.buttonRight}
          >
            <img src={greaterThanIcon} alt="greater than icon" />
          </button>
        </div>
        {/*card*/}
        <div
          className={styles.offset}
          style={healthDraggingTransform}
          onTouchStart={(e) => handleTouchStart(e, touchStartX, isDragging)}
          onTouchMove={(e) =>
            handleTouchMove(
              e,
              isDragging,
              currentX,
              touchStartX,
              setHealthDraggingOffset
            )
          }
          onTouchEnd={() =>
            handleTouchEnd(
              isDragging,
              currentX,
              setHealthCircle,
              setHealthDraggingOffset,
              touchStartX,
              healthCircle
            )
          }
        >
          <div
            style={
              ifMobile
                ? healthMobileTransform
                : { transform: `${health.transform}` }
            }
            className={styles.card}
          >
            <img src={images[0]} alt="" />
            <h4>How to Calm Your Fear of Flying</h4>
          </div>
          <div
            style={
              ifMobile
                ? healthMobileTransform
                : { transform: `${health.transform}` }
            }
            className={styles.card}
          >
            <img src={images[1]} alt="" />
            <h4>I Got Tested for Plastic. You Can Too</h4>
          </div>
          <div
            style={
              ifMobile
                ? healthMobileTransform
                : { transform: `${health.transform}` }
            }
            className={styles.card}
          >
            <img src={images[2]} alt="" />
            <h4>What's the Best Kind of Sunscreen?</h4>
          </div>
          <div
            style={
              ifMobile
                ? healthMobileTransform
                : { transform: `${health.transform}` }
            }
            className={styles.card}
          >
            <img src={images[3]} alt="" />
            <h4>No One Knows How to Talk About Weight</h4>
          </div>
          <div
            style={
              ifMobile
                ? healthMobileTransform
                : { transform: `${health.transform}` }
            }
            className={styles.card}
          >
            <img src={images[4]} alt="" />
            <h4>How a Dairy Worker Got Infected </h4>
          </div>
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
      {/*circles*/}
      <div className={styles.stories}>
        <p>5 STORIES</p>
        <div className={styles.storiesButton}>{entertainmentButton}</div>
      </div>
      <div className={styles.wrap}>
        {/*blur and button*/}
        <div ref={entertainment.blurLeft} className={styles.blurLeft}>
          <button
            ref={entertainment.buttonLeft}
            onClick={() =>
              offsetLeft(
                entertainment.offset,
                entertainment.setOffset,
                updateDisplay,
                entertainment.buttonLeft,
                entertainment.buttonRight,
                entertainment.blurLeft,
                entertainment.blurRight
              )
            }
            className={styles.buttonLeft}
          >
            <img src={lessThanIcon} alt="less than icon" />
          </button>
        </div>
        <div ref={entertainment.blurRight} className={styles.blurRight}>
          <button
            ref={entertainment.buttonRight}
            onClick={() =>
              offsetRight(
                entertainment.offset,
                entertainment.setOffset,
                updateDisplay,
                entertainment.buttonLeft,
                entertainment.buttonRight,
                entertainment.blurLeft,
                entertainment.blurRight
              )
            }
            className={styles.buttonRight}
          >
            <img src={greaterThanIcon} alt="greater than icon" />
          </button>
        </div>
        {/*card*/}
        <div
          className={styles.offset}
          style={entertainmentDraggingTransform}
          onTouchStart={(e) => handleTouchStart(e, touchStartX, isDragging)}
          onTouchMove={(e) =>
            handleTouchMove(
              e,
              isDragging,
              currentX,
              touchStartX,
              setEntertainmentDraggingOffset
            )
          }
          onTouchEnd={() =>
            handleTouchEnd(
              isDragging,
              currentX,
              setEntertainmentCircle,
              setEntertainmentDraggingOffset,
              touchStartX,
              entertainmentCircle
            )
          }
        >
          <div
            style={
              ifMobile
                ? entertainmentMobileTransform
                : { transform: `${entertainment.transform}` }
            }
            className={styles.card}
          >
            <img src={images[5]} alt="" />
            <h4>Diddy Breaks Silence Over Video of Him Assaulting Cassie</h4>
          </div>
          <div
            style={
              ifMobile
                ? entertainmentMobileTransform
                : { transform: `${entertainment.transform}` }
            }
            className={styles.card}
          >
            <img src={images[6]} alt="" />
            <h4>
              Hollywood Pays Tribute After Celebrated Actor Dabney Coleman Dies
            </h4>
          </div>
          <div
            style={
              ifMobile
                ? entertainmentMobileTransform
                : { transform: `${entertainment.transform}` }
            }
            className={styles.card}
          >
            <img src={images[7]} alt="" />
            <h4>Man Charged in Attack on Steve Buscemi</h4>
          </div>
          <div
            style={
              ifMobile
                ? entertainmentMobileTransform
                : { transform: `${entertainment.transform}` }
            }
            className={styles.card}
          >
            <img src={images[8]} alt="" />
            <h4>Video Appears to Show Diddy Assault Cassie</h4>
          </div>
          <div
            style={
              ifMobile
                ? entertainmentMobileTransform
                : { transform: `${entertainment.transform}` }
            }
            className={styles.card}
          >
            <img src={images[9]} alt="" />
            <h4>Kinds of Kindness Is a Tedious Follow-</h4>
          </div>
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
      {/*circles*/}
      <div className={styles.stories}>
        <p>5 STORIES</p>
        <div className={styles.storiesButton}>{financeButton}</div>
      </div>
      <div className={styles.wrap}>
        {/*blur and button*/}
        <div ref={personalFinance.blurLeft} className={styles.blurLeft}>
          <button
            ref={personalFinance.buttonLeft}
            onClick={() =>
              offsetLeft(
                personalFinance.offset,
                personalFinance.setOffset,
                updateDisplay,
                personalFinance.buttonLeft,
                personalFinance.buttonRight,
                personalFinance.blurLeft,
                personalFinance.blurRight
              )
            }
            className={styles.buttonLeft}
          >
            <img src={lessThanIcon} alt="less than icon" />
          </button>
        </div>
        <div ref={personalFinance.blurRight} className={styles.blurRight}>
          <button
            ref={personalFinance.buttonRight}
            onClick={() =>
              offsetRight(
                personalFinance.offset,
                personalFinance.setOffset,
                updateDisplay,
                personalFinance.buttonLeft,
                personalFinance.buttonRight,
                personalFinance.blurLeft,
                personalFinance.blurRight
              )
            }
            className={styles.buttonRight}
          >
            <img src={greaterThanIcon} alt="greater than icon" />
          </button>
          {/*card*/}
        </div>
        <div
          className={styles.offset}
          style={financeDraggingTransform}
          onTouchStart={(e) => handleTouchStart(e, touchStartX, isDragging)}
          onTouchMove={(e) =>
            handleTouchMove(
              e,
              isDragging,
              currentX,
              touchStartX,
              setFinanceDraggingOffset
            )
          }
          onTouchEnd={() =>
            handleTouchEnd(
              isDragging,
              currentX,
              setFinanceCircle,
              setFinanceDraggingOffset,
              touchStartX,
              financeCircle
            )
          }
        >
          <div
            style={
              ifMobile
                ? financeMobileTransform
                : { transform: `${personalFinance.transform}` }
            }
            className={styles.card}
            personalFinance
          >
            <img src={images[10]} alt="" />
            <h4>8 Best Mint Alternatives to Replace the Budgeting App</h4>
          </div>
          <div
            style={
              ifMobile
                ? financeMobileTransform
                : { transform: `${personalFinance.transform}` }
            }
            className={styles.card}
          >
            <img src={images[11]} alt="" />
            <h4>Best High-Yield Savings Accounts for May 2024</h4>
          </div>
          <div
            style={
              ifMobile
                ? financeMobileTransform
                : { transform: `${personalFinance.transform}` }
            }
            className={styles.card}
          >
            <img src={images[12]} alt="" />
            <h4>Best 0% APR Credit Cards for May 2024</h4>
          </div>
          <div
            style={
              ifMobile
                ? financeMobileTransform
                : { transform: `${personalFinance.transform}` }
            }
            className={styles.card}
          >
            <img src={images[13]} alt="" />
            <h4>Best Sign-Up Bonus Credit Cards for May 2024</h4>
          </div>
          <div
            style={
              ifMobile
                ? financeMobileTransform
                : { transform: `${personalFinance.transform}` }
            }
            className={styles.card}
          >
            <img src={images[14]} alt="" />
            <h4>Best Pet Insurance Companies for 2024</h4>
          </div>
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
      {/*circles*/}
      <div className={styles.stories}>
        <p>4 STORIES</p>
        <div className={styles.storiesButton}>{futureButton}</div>
      </div>
      <div className={styles.wrap}>
        {/*blur and button*/}
        <div ref={future.blurLeft} className={styles.blurLeft}>
          <button
            ref={future.buttonLeft}
            onClick={() =>
              offsetLeft(
                future.offset,
                future.setOffset,
                updateDisplay,
                future.buttonLeft,
                future.buttonRight,
                future.blurLeft,
                future.blurRight
              )
            }
            className={styles.buttonLeft}
          >
            <img src={lessThanIcon} alt="less than icon" />
          </button>
        </div>
        <div ref={future.blurRight} className={styles.blurRight}>
          <button
            ref={future.buttonRight}
            onClick={() =>
              offsetRight(
                future.offset,
                future.setOffset,
                updateDisplay,
                future.buttonLeft,
                future.buttonRight,
                future.blurLeft,
                future.blurRight
              )
            }
            className={styles.buttonRight}
          >
            <img src={greaterThanIcon} alt="greater than icon" />
          </button>
        </div>
        {/*card*/}
        <div
          className={styles.offset}
          style={futureDraggingTransform}
          onTouchStart={(e) => handleTouchStart(e, touchStartX, isDragging)}
          onTouchMove={(e) =>
            handleTouchMove(
              e,
              isDragging,
              currentX,
              touchStartX,
              setFutureDraggingOffset
            )
          }
          onTouchEnd={() =>
            handleTouchEnd(
              isDragging,
              currentX,
              setFutureCircle,
              setFutureDraggingOffset,
              touchStartX,
              futureCircle
            )
          }
        >
          <div
            style={
              ifMobile
                ? futureMobileTransform
                : { transform: `${future.transform}` }
            }
            className={styles.card}
          >
            <img src={images[15]} alt="" />
            <h4>The Unexpected Impact of RTO Mandates on Senior Workers</h4>
          </div>
          <div
            style={
              ifMobile
                ? futureMobileTransform
                : { transform: `${future.transform}` }
            }
            className={styles.card}
          >
            <img src={images[16]} alt="" />
            <h4>What to do about poor quality meetings</h4>
          </div>
          <div
            style={
              ifMobile
                ? futureMobileTransform
                : { transform: `${future.transform}` }
            }
            className={styles.card}
          >
            <img src={images[17]} alt="" />
            <h4>
              The Charts Leaders Should See to Put the Office to Better Use
            </h4>
          </div>
          <div
            style={
              ifMobile
                ? futureMobileTransform
                : { transform: `${future.transform}` }
            }
            className={styles.card}
          >
            <img src={images[18]} alt="" />
            <h4>
              Why Workers Should Focus on “Durable Skills” Over “Perishable
              Skills”
            </h4>
          </div>
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
      {/*circles*/}
      <div className={styles.stories}>
        <p>5 STORIES</p>
        <div className={styles.storiesButton}>{shoppingButton}</div>
      </div>
      <div className={styles.wrap}>
        {/*blur and button*/}
        <div ref={shopping.blurLeft} className={styles.blurLeft}>
          <button
            ref={shopping.buttonLeft}
            onClick={() =>
              offsetLeft(
                shopping.offset,
                shopping.setOffset,
                updateDisplay,
                shopping.buttonLeft,
                shopping.buttonRight,
                shopping.blurLeft,
                shopping.blurRight
              )
            }
            className={styles.buttonLeft}
          >
            <img src={lessThanIcon} alt="less than icon" />
          </button>
        </div>
        <div ref={shopping.blurRight} className={styles.blurRight}>
          <button
            ref={shopping.buttonRight}
            onClick={() =>
              offsetRight(
                shopping.offset,
                shopping.setOffset,
                updateDisplay,
                shopping.buttonLeft,
                shopping.buttonRight,
                shopping.blurLeft,
                shopping.blurRight
              )
            }
            className={styles.buttonRight}
          >
            <img src={greaterThanIcon} alt="greater than icon" />
          </button>
        </div>
        {/*card*/}
        <div
          className={styles.offset}
          style={shoppingDraggingTransform}
          onTouchStart={(e) => handleTouchStart(e, touchStartX, isDragging)}
          onTouchMove={(e) =>
            handleTouchMove(
              e,
              isDragging,
              currentX,
              touchStartX,
              setShoppingDraggingOffset
            )
          }
          onTouchEnd={() =>
            handleTouchEnd(
              isDragging,
              currentX,
              setShoppingCircle,
              setShoppingDraggingOffset,
              touchStartX,
              shoppingCircle
            )
          }
        >
          <div
            style={
              ifMobile
                ? shoppingMobileTransform
                : { transform: `${shopping.transform}` }
            }
            className={styles.card}
          >
            <img src={images[19]} alt="" />
            <h4>What to Look for at Wayfair’s Big Spring Sale</h4>
          </div>
          <div
            style={
              ifMobile
                ? shoppingMobileTransform
                : { transform: `${shopping.transform}` }
            }
            className={styles.card}
          >
            <img src={images[20]} alt="" />
            <h4>
              The Best Mattresses for Side Sleepers: Which Is Right for You?
            </h4>
          </div>
          <div
            style={
              ifMobile
                ? shoppingMobileTransform
                : { transform: `${shopping.transform}` }
            }
            className={styles.card}
          >
            <img src={images[21]} alt="" />
            <h4>
              Best LED Face Masks for Glowing Skin in 2024, Dermatologist
              Recommended
            </h4>
          </div>
          <div
            style={
              ifMobile
                ? shoppingMobileTransform
                : { transform: `${shopping.transform}` }
            }
            className={styles.card}
          >
            <img src={images[22]} alt="" />
            <h4>The Best Places to Buy Glasses Online, Reviewed and Tested</h4>
          </div>
          <div
            style={
              ifMobile
                ? shoppingMobileTransform
                : { transform: `${shopping.transform}` }
            }
            className={styles.card}
          >
            <img src={images[23]} alt="" />
            <h4>The Best Weekender Bags for Women</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
