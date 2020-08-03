import React from 'react';
import './UserOutput.css';

const userOutput = ( props ) => {
    const style = {
        div: {
            backgroundColor: 'white',
            font: 'inherit',
            border: '2px dashed green',
            padding: '8px',
            cursor: 'pointer',
            width: '500px',
            margin: '5px auto 5px auto'
        },
        link: {
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'red',
            textDecoration: 'underline'
        }
    };
    return (
        <div style={style.div}>
            <p>Hi there!</p>
            <p 
                data-row-index={ props.rowIndex } 
                onMouseOver={ props.mouseOverEvent }
                onMouseOut={ props.mouseOutEvent }
                className="textBox"
            >
                    I am { props.username }
            </p>
            <p className="textBox">
                My FullName is { props.fullname }
            </p>
            <p className="textBox">
                I am a member of team { props.teamName }
            </p>
            Click <span style={style.link} onClick={ props.fullNameClicked }>here</span> to switch all to my real full name 
        </div>
    )
};

export default userOutput;