import React from "react";

import Card from "../ui/Card";
import styles from './UsersList.module.css'

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} {user.age} ({+(user.age) === 1 ? "an" : "ani"})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
