import React from "react";
import Card from "../ui/Card";
import styles from "./AddUser.module.css";
import Button from "../ui/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="userAge">Age (Years)</label>
        <input id="userAge" type="number" />
        <Button buttonType="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
