import React from "react";

import styles from "./Header.module.css";
import pozaMancare from "../../assets/meals.jpg";
import HeaderCartButon from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>GustariBune</h1>
        <HeaderCartButon />
      </header>
      <div className={styles["main-image"]}>
        <img src={pozaMancare} alt="Masa plina de bucate" />
      </div>
    </React.Fragment>
  );
};

export default Header;
