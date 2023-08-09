import React, {useState} from 'react';

// don't change the Component name "App"

export default function App() {
    const [buttonClicked,setButtonClicked]=React.useState(false)
    const buttonClickedHandler = (event) =>{
        setButtonClicked(true)
    }
    const alertClickedHandler = (event) =>{
        setButtonClicked(false)
    }
    
    let alertContent="";
    if (buttonClicked === true){
        alertContent= <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={alertClickedHandler}>Proceed</button>
        </div>
    }
    return (
      <div>
        {alertContent}
        <button onClick={buttonClickedHandler}>Delete</button>
      </div>    
    );
}