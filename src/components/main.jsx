import React from "react";
import styles from "../styles/main.module.css";
const Main = () => {
  return (
    <div className={styles.main}>
      <div className="banner">
        <img src="https://picsum.photos/1400/500?random=1" alt="" />
      </div>
      <div className="about">
        <div className="wrap">
          <div className="title">
            <h2>關於我們</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              excepturi totam quam, voluptatibus enim dicta quis eum animi iure
              aliquam!
            </p>
          </div>
          <div className="item-group">
            <div className="item">
              <img src="https://picsum.photos/300/200?random=2" alt="" />
              <h3>title</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                ratione sapiente provident dolores veniam quaerat, laudantium
                sunt saepe! Possimus, eaque ratione. Asperiores molestiae
                explicabo, aliquam beatae nulla fugiat sequi debitis.
              </p>
            </div>
            <div className="item">
              <img src="https://picsum.photos/300/200?random=3" alt="" />
              <h3>title</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                ratione sapiente provident dolores veniam quaerat, laudantium
                sunt saepe! Possimus, eaque ratione. Asperiores molestiae
                explicabo, aliquam beatae nulla fugiat sequi debitis.
              </p>
            </div>
            <div className="item">
              <img src="https://picsum.photos/300/200?random=1" alt="" />
              <h3>title</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                ratione sapiente provident dolores veniam quaerat, laudantium
                sunt saepe! Possimus, eaque ratione. Asperiores molestiae
                explicabo, aliquam beatae nulla fugiat sequi debitis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="wrap">
          <div className="title"></div>
          <div className="item-group">
            <div className="item">
              <div className="pic"></div>
              <div className="text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
