import React from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";

function Header() {
  return (
    <div className={styles.fix}>
      <div className={styles.header}>
        <div className={styles.image}>
          <Image
            src="/logo.png"
            alt="logo"
            // style={{ width: "10vw", height: "5vh" }}
            width={46}
            height={52}
            className={styles.logo}
          />
        </div>
        <p className={styles.title}>St. George's Lab Tutoring</p>
        {/* <div className={styles.manu_selection}>
          <p className={styles.types}>Lab Sign In</p>
          <p className={styles.types}>Request Tutor</p>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
