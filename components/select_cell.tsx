import React from "react";
import styles from "../styles/Home.module.css";

function SelectCell(props: any) {
  return (
    <div className={styles.center}>
      <div className={styles.cell_bg}>
        <p className={styles.question}>{props.text}</p>
        <select onChange={props.handleTickerChange} className={styles.select}>
          <option value="" disabled selected>
            {props.placeholder}
          </option>
          {props.input.map((item: any, index: any) => (
            <option value={props.input[index]}>{props.input[index]}</option>
          ))}
        </select>
      </div>
    </div>

    // <div className={styles.center}>
    //   <select onChange={props.handleTickerChange}>
    //     <option value="congleton">Congleton</option>
    //     <option value="dlewis">D. Lewis</option>
    //     <option value="mlewis">M. Lewis</option>
    //     <option value="spezzano">Spezzano</option>
    //     <option value="vaughters">Vaughters</option>
    //   </select>
    // </div>
  );
}

export default SelectCell;
