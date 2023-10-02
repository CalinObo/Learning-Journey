import React, { useState } from "react";
import Card from "../ui/Card";
import styles from "./AddUser.module.css";
import Button from "../ui/Button";

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setUsername("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (event) => {
    setUsername(event.target.value);
    console.log(enteredUsername);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log(enteredAge);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangedHandler}
        />
        <label htmlFor="userAge">Age (Years)</label>
        <input
          id="userAge"
          type="number"
          value={enteredAge}
          onChange={ageChangedHandler}
        />
        <Button buttonType="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
