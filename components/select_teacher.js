import React from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";

function SelectTeacher(props) {
  function findEmail(arrays, valueToFind) {
    for (let i = 0; i < arrays.length; i++) {
      if (arrays[i].includes(valueToFind)) {
        return arrays[i][3];
      }
    }
    return null;
  }

  const handleChange = (event) => {
    const email = findEmail(props.data, event.target.value);
    console.log(email)
    props.handler(event.target.value, email);
  };

  return (
    <div className={styles.center}>
      <div className={styles.cell_bg}>
        <p className={styles.question}>{props.text}</p>
        <select onChange={handleChange} className={styles.select}>
          <option value="" disabled selected>
            {props.placeholder}
          </option>
          {props.data.map((item, index) =>
            item[1] == props.course ? (
              <option value={item[2]}>{item[2]}</option>
            ) : null
          )}
        </select>
      </div>
    </div>
  );
}

export default SelectTeacher;
