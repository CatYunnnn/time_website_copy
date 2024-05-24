import React from "react";
import styles from "../styles/audio.module.css";
import audio from "../audios/audio1.mp3";
import pic from "../icon/audio1.jpg";
export default function Audio() {
  return (
    <div className={styles.audio}>
      <h2>LISTEN TO PERSON OF THE WEEK</h2>
      <div
        className={styles.audioBackground}
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: "158px 155px",
          backgroundPosition: "12px 12px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <audio controls>
          <source src={audio} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}
