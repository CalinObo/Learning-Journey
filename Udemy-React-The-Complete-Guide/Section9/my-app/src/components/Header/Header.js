import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src={props.logoCalin} alt={props.altCalin} />
      <h1>{props.textCalin}</h1>
    </header>
  );
};

export default Header;
