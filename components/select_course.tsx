import React from "react";
import styles from "../styles/Home.module.css";

function SelectCourse(props: any) {
  const handleChange = (event: any) => {
    props.handler(event.target.value);
  };
  const uniqueValues = new Set();

  return (
    <div className={styles.center}>
      <div className={styles.cell_bg}>
        <p className={styles.question}>{props.text}</p>
        <select onChange={handleChange} className={styles.select}>
          <option value="" disabled selected>
            {props.placeholder}
          </option>
          {props.data.map((item: any, index: any) => {
            if (item[0] == props.subject && !uniqueValues.has(item[1])) {
              uniqueValues.add(item[1]);
              return (
                <option key={index} value={item[1]}>
                  {item[1]}
                </option>
              );
            }
            return null;
          })}
        </select>
      </div>
    </div>
  );
}

export default SelectCourse;
