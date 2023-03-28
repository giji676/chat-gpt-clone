import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from "openai";
import Question from "./components/Question.js"
import Answer from "./components/Answer.js"

function App() {
  const [prompt, setPrompt] = useState([]);
  const [prompts, setPrompts] = useState([]);
  const [results, setResults] = useState([]);

  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.REACT_APP_API_KEY
  }))

  const callAPI = async (prompt) => {
    setPrompt([]);
    setPrompts([...prompts, prompt]);
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    });
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

      {/* <p>test code <code className="code">print("test")</code> done</p> */}
      <div className="input-container">
        <input 
          type="text" 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)} 
        />
        <button onClick={() => callAPI(prompt)}>Ask</button>
      </div>
    </div>
  );
}

export default App;
