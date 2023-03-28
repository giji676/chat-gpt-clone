import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from "openai";
import Question from "./components/Question.js";
import Answer from "./components/Answer.js";
import SubmitSVG from "./images/submitIcon.svg";

function App() {
  const [prompt, setPrompt] = useState([]);
  const [prompts, setPrompts] = useState([]);
  const [results, setResults] = useState([]);

  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.REACT_APP_API_KEY
  }))

  const callAPI = async (prompt) => {
    if (prompt == "") return;
    setPrompt([]);
    setPrompts([...prompts, prompt]);
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    });
    console.log(result);
    setResults([...results, result]);
  }

  return (
    <div className="app">
      {prompts.map((prompt, index) => (
        <React.Fragment key={index}>
            <Question question={prompt} />
            {results[index] && <Answer result={results[index]} />}
        </React.Fragment>
      ))}

      <div className="bottom-main">
        <div className="input-container">
          <input 
            type="text" 
            value={prompt} 
            onChange={(e) => setPrompt(e.target.value)} 
          />
          <img 
            src={SubmitSVG}
            alt="submit"
            onClick={() => callAPI(prompt)}
          />
        </div>
        <p>This is a chat gpt clone utilising the <a href="https://platform.openai.com/docs/api-reference">openAI</a> API.</p>
      </div>
    </div>
  );
}

export default App;
