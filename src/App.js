import './App.css';
import { useEffect } from 'react';
import { Configuration, OpenAIApi } from "openai";

function App() {
  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.REACT_APP_API_KEY
  }))
  
  openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "hello, what is 2+2*2" }]
  }).then(res => {
    console.log(res.data.choices[0].message.content);
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;
