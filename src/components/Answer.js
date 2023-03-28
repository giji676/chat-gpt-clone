import './Answer.css';
import { useState } from 'react';
import OpenAIIcon from '../images/openAIIcon.svg';
import LikeIcon from '../images/likeIcon.svg';
import DislikeIcon from '../images/dislikeIcon.svg';

function Answer(props) {
    return (
        <div className="answer-back">
            <div className="answer-container">
                <img className="openAI-icon" src={OpenAIIcon} />
                <p>{props.result.data.choices[0].message.content}</p>
                <div className="vote-container">
                    <img className="vote" src={LikeIcon} />
                    <img className="vote" src={DislikeIcon} />
                </div>
            </div>
        </div>
    );
}


export default Answer;