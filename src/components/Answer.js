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
                <p dangerouslySetInnerHTML={
                    {__html: (props.result.data.choices[0].message.content)
                        .replace(/`{3}([^`]+)`{3}/g, '<br><span class="code">$1</span><br>')
                        .replace(/`([^`]+)`/g, '`<span class="bolded">$1</span>`<br>')}
                    }>{}</p>
                <div className="vote-container">
                    <img className="vote" src={LikeIcon} />
                    <img className="vote" src={DislikeIcon} />
                </div>
            </div>
        </div>
    );
}


export default Answer;