import React from "react";

const UserInputFields = (props) => {
  const inputChangedHandler = (input, value) => {
    props.onChangedHandler(input, value);
  };
 
  return (
    <p>
      <label htmlFor={props.htmlForCalin}>{props.text}</label>
      <input
        onChange={(event) =>
          inputChangedHandler(props.htmlForCalin, event.target.value)
        }
        placeholder={props.placeholderCal}
        type={props.typeCalin}
        id={props.htmlForCalin}
        value={props.valueCal}
      />
    </p>
  );
};

export default UserInputFields;
