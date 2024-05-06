import React from "react";
import styles from "../styles/Home.module.css";

function Submitted() {
  return (
    <div className={styles.center}>
      <div className={styles.submitted_box}>
        <p className={styles.response}>Response Recorded</p>
        <p className={styles.thank_you}>Thank you for you submission!</p>
        <p className={styles.thank_you}>
          We appreciate your feeback on your lab experience.
        </p>
      </div>
    </div>
  );
}

export default Submitted;
