import './App.css';
import { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from "openai";
import Question from "./components/Question.js"

function App() {
  const [prompt, setPrompt] = useState([]);
  const [prompts, setPrompts] = useState([]);
  const [results, setResults] = useState([]);

  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.REACT_APP_API_KEY
  }))

  const callAPI = async (prompt) => {
    setPrompt([]);
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    });
    setPrompts([...prompts, prompt]);
    setResults([...results, result]);
  }

  return (
    <div className="app">
      {results.map((result, index) => (
        <Question result={result} />
      ))}

      {/* <p>test code <code className="code">print("test")</code> done</p> */}
      <div className="input-container">
        <input 
          type="text" 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)} 
        />
        <button onClick={() => callAPI(prompt)} >test</button>
      </div>
    </div>
  );
}

export default App;
