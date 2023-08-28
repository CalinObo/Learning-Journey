import React from "react";
import styles from "./Button.module.css";

const Buttons = (props) => {
  const clickHandler = () => {
    props.onClickHandler();
  }
  return (
    <p className={styles.actions}>
      <button type={props.buttonType} className={styles.buttonAlt} onClick={clickHandler}>
        {props.text}
      </button>
      <button type={props.buttonType2} className={styles.button}>
        {props.text2}
      </button>
    </p>
  );
};

export default Buttons;
