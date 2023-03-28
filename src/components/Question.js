import './Question.css';
import { useState } from 'react';

function Question(props) {
    return (
        <div className="question-container">
            <p>{props.result.data.choices[0].message.content}</p>
        </div>
    );
}


export default Question;