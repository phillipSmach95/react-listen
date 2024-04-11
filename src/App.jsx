import "./App.css";
import { useState } from "react";

function App() {
  
  const randomRGB = () => { 
    return Math.ceil(Math.random()*255);}
  console.log(randomRGB());
  const data = [
    {title:'red',red:255,green:0,blue:0},
    {title:'green',red:0,green:255,blue:0},
    {title:'blue',red:0,green:0,blue:255},
    {title:'random',red:randomColors,green:0,blue:255},
    
  ]
  
  const color = 
    {red:0,green:0,blue:0}
  
  const [colors, setColors] = useState(data);
  const [randomColors, setRandomColors] = useState(color);
  const setRandomColor = ()=>{
    setRandomColors({red:randomRGB(),blue:randomRGB(),green:randomRGB()})
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>list Aufgabe 1</h1>
          <ul>
            {colors.map((color, i) => (
              <li key={"color-" + i} style={{color:`rgb(${color.red},${color.green},${color.blue})`}}>{color.title}</li>
            ))}
          </ul>
        </div>
        <div>
            <button onClick={setRandomColors()}></button>
        </div>
      </header>
    </div>
  );
}

export default App;
