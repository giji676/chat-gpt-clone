import './Question.css';
import { useState } from 'react';
import OpenAIIcon from '../images/openAIIcon.svg';

function Question(props) {
    return (
        <div className="question-back">
            <div className="question-container">
                <img className="openAI-icon" src={OpenAIIcon} />
                <p>{props.question}</p>
            </div>
        </div>
    );
}


export default Question;