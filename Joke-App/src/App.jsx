import { useState } from 'react'
import './App.css'
import jokeLogo from './assets/jokegen5.png'


const App = () => {
  const [setup, setSetup] = useState("Setup here!");
  const [punchline, setPunchline] = useState('Punchline here!')

  const getJoke = () => {
    const apiUrl = 'https://official-joke-api.appspot.com/random_joke';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {
        setSetup(data.setup)
        setPunchline(data.punchline)
        console.log("setup : " + data.setup);
        console.log("punchline: " + data.punchline);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="App">
      <div style={{
      display: "flex",
      justifyContent: "center",
      }}>
        <img src={jokeLogo} className="logo" alt="joke logo" width="80%"/>
      </div>
      <div style={{ width: "90vw", display: "flex", justifyContent: "center", flexDirection: "column", maxWidth: 600 }}>
        <div style={{ marginBottom: 10, display: "flex", flexDirection: "row" }}>
          <div className = "App_title_wrapper">
            Joke Generator!
          </div>
          <div>
            <button onClick={() => getJoke()}>Generate</button>
          </div>
        </div>
        <div className="App_joke_box">
          {setup}
        </div>
        <div className="App_joke_box_2">
          {punchline}
        </div>
      </div>
    </div>
  )
}


export default App
