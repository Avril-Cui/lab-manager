import React from "react";
import styles from "../styles/Home.module.css";

function Submit(props: any) {
  return (
    <div className={styles.center}>
      <input
        type="submit"
        value={
          props.isSubmit ? "Thank you for submitting your feedback!" : "Submit!"
        }
        className={styles.submit}
      />
    </div>
  );
}

export default Submit;
