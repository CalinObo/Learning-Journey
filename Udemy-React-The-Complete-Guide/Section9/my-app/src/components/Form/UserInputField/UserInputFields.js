import React from "react";

const UserInputFields = (props) => {
  return (
    <p>
      <label htmlFor={props.htmlForCalin}>{props.text}</label>
      <input type={props.typeCalin} id={props.htmlForCalin} />
    </p>
  );
};

export default UserInputFields;
