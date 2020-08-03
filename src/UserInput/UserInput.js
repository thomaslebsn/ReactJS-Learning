import React from 'react';
import './UserInput.css';

const userInput = ( props ) => {
    return (
        <input 
            className="input"
            placeholder="Enter values you'd like to change the name of the team for all users" value={props.teamName} 
            onChange={ props.changedEvent }
        />
    )
};

export default userInput;