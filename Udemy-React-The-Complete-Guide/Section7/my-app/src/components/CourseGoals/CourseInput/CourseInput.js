import React,{useState} from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props =>{
    const [enteredValue, setEnteredValue] = useState('');

    const goalInputChangedHandler = event => {
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event =>{
        event.preventDefault();
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangedHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};




export default CourseInput;