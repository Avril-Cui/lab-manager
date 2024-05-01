import React from "react";
import styles from "../styles/Home.module.css";

function SelectTeacher(props: any) {
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
          {props.data.map((item: any, index: any) =>
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
