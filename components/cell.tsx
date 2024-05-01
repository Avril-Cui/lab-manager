import React from "react";
import styles from "../styles/Home.module.css";

function Cell(props: any) {
  const handleChange = (event: any) => {
    props.handler(event.target.value);
  };

  return (
    <div className={styles.center}>
      <div className={styles.cell_bg}>
        <p className={styles.question}>{props.text}</p>
        <input
          type={props.input_type}
          placeholder={props.input_text}
          className={styles.input}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Cell;
