import "./App.css";
import { useState } from "react";

function App() {
  
  const data = [
    {title:'red',red:255,green:0,blue:0},
    {title:'green',red:0,green:255,blue:0},
    {title:'blue',red:0,green:0,blue:255},
  ]
  const [colors, setColors] = useState(data);
  const randomRGB = () => { 
    
    
    return Math.round(Math.random()*255).toFixed(0);}
  console.log(randomRGB());
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

        </div>
      </header>
    </div>
  );
}

export default App;
