import React, { useState } from "react";
import UserInputFields from "./UserInputFields";
import Buttons from "../Buttons/Buttons";
import styles from "./UserInput.module.css";

const initialUserInput = {
  "current-savings": 1000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  "duration": 10
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    console.log("nu");
    setUserInput(initialUserInput);
  };
  const changedHandler = (input, value) => {
    console.log(input, value);
    console.log("sunt in app");
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
    console.log(userInput)
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}> 
        <UserInputFields
          htmlForCalin={props.htmlForCal}
          text={props.text}
          typeCalin={props.typeCal}
          onChangedHandler={changedHandler}
          valueCal={userInput["current-savings"]}
        />
        <UserInputFields
          htmlForCalin={props.HtmlForCal2}
          text={props.text2}
          typeCalin={props.typeCal2}
          onChangedHandler={changedHandler}
          valueCal={userInput["yearly-contribution"]}
        />
      </div>
      <div className={styles["input-group"]}>
        <UserInputFields
          htmlForCalin={props.HtmlForCal3}
          text={props.text3}
          typeCalin={props.typeCal3}
          onChangedHandler={changedHandler}
          valueCal={userInput["expected-return"]}
        />
        <UserInputFields
          htmlForCalin={props.HtmlForCal4}
          text={props.text4}
          typeCalin={props.typeCal4}
          onChangedHandler={changedHandler}
          valueCal={userInput["duration"]}
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
