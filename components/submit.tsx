import React from "react";
import styles from "../styles/Home.module.css";

function Submit() {
  return (
    <div className={styles.center}>
      <input type="submit" value="Submit!" className={styles.submit} />
    </div>
  );
}

export default Submit;
