import React, { useState } from "react";
import Card from "../ui/Card";
import styles from "./AddUser.module.css";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";
import Wrapper from "../helpers/Wrapper"

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title:'Invalid age',
        message:'Please enter a valid age.'
      })
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

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
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
    </Wrapper>
  );
};

export default AddUser;
