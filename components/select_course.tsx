import React from "react";
import styles from "../styles/Home.module.css";

function SelectCourse(props: any) {
  const handleChange = (event: any) => {
    props.handler(event.target.value);
  };

  return (
    <div className={styles.center}>
      <div className={styles.cell_bg}>
        <p className={styles.question}>{props.text}</p>
        <select onChange={handleChange} className={styles.select}>
          <option value="" disabled selected>
            {props.placeholder}
          </option>
          {props.input.map((item: any, index: any) => (
            <option value={props.input[index]}>{props.input[index]}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectCourse;
