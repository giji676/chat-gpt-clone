import './Question.css';
import { useState } from 'react';

function Question(props) {
    return (
        <div className="question-container">
            <p>{props.question}</p>
        </div>
    );
}


export default Question;