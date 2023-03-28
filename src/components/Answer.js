import './Answer.css';
import { useState } from 'react';

function Answer(props) {
    return (
        <div className="answer-container">
            <p>{props.result.data.choices[0].message.content}</p>
        </div>
    );
}


export default Answer;