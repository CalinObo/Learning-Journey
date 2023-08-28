import React from "react";
import UserInputFields from "./UserInputFields";
import Buttons from "../Buttons/Buttons";
import styles from "./UserInput.module.css";

const UserInput = (props) => {

  const submitHandler= (event) =>{
    event.preventDefault();
    console.log("da")

  };
  const resetHandler=() =>{
    console.log("nu")
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <UserInputFields
          htmlForCalin={props.htmlForCal}
          text={props.text}
          typeCalin={props.typeCal}
        />
        <UserInputFields
          htmlForCalin={props.HtmlForCal2}
          text={props.text2}
          typeCalin={props.typeCal2}
        />
      </div>
      <div className={styles["input-group"]}>
        <UserInputFields
          htmlForCalin={props.HtmlForCal3}
          text={props.text3}
          typeCalin={props.typeCal3}
        />
        <UserInputFields
          htmlForCalin={props.HtmlForCal4}
          text={props.text4}
          typeCalin={props.typeCal4}
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
