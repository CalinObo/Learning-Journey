import React, { useState } from "react";
import UserInputFields from "./UserInputFields";
import Buttons from "../Buttons/Buttons";
import styles from "./UserInput.module.css";

const initialUserInput = {
  "props.htmlForCal": 1000,
  "props.htmlForCal2": 1200,
  "props.htmlForCal3": 7,
  "props.htmlForCal4": 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("da");
  };
  const resetHandler = () => {
    console.log("nu");
    setUserInput(initialUserInput);
  };
  const changedHandler = (input, value) => {
    //   console.log(input, value);
    //   console.log("sunt in app");
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };

      console.log(prevInput);
    });
    console.log("aici", userInput);
  };
  const functieAdi = (ev) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        ev: userInput,
      };
    });

    console.log("aici1", ev.userInput);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <UserInputFields
          htmlForCalin={props.htmlForCal}
          text={props.text}
          placeholderCal="valoare mea"
          typeCalin={props.typeCal}
          //  valueCal={userInput["props.htmlForCal"]}

          onChangedHandler={functieAdi}
        />
        <UserInputFields
          htmlForCalin={props.HtmlForCal2}
          text={props.text2}
          typeCalin={props.typeCal2}
          onChangedHandler={changedHandler}
          valueCal={userInput["props.htmlForCal2"]}
        />
      </div>
      <div className={styles["input-group"]}>
        <UserInputFields
          htmlForCalin={props.HtmlForCal3}
          text={props.text3}
          typeCalin={props.typeCal3}
          onChangedHandler={changedHandler}
          valueCal={userInput["props.htmlForCal3"]}
        />
        <UserInputFields
          htmlForCalin={props.HtmlForCal4}
          text={props.text4}
          typeCalin={props.typeCal4}
          onChangedHandler={changedHandler}
          valueCal={userInput["props.htmlForCal4"]}
        />
      </div>
      <Buttons
        buttonType="reset"
        text="Reset"
        onClickHandler={resetHandler} // reset handler merge doar la type = reset, daca al- 2lea buton e cel de reset
        // trebuie sa lift the state up pentru acesta
        buttonType2="submit"
        text2="Calculate"
      />
    </form>
  );
};
export default UserInput;
// className={styles["input-group"]}
