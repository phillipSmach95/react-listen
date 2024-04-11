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
    
  ]
  const randomData = 
    [{title:'color',color:'rgb(255,255,255)'}]
  
 
    
  
  const [colors, setColors] = useState(data);
  const [randomColor, setRandomColor] = useState('');
  const [randomColors, setRandomColors] = useState(randomData)
  const addRandomColor = ()=>{
    setRandomColor(`rgb(${randomRGB()},${randomRGB()},${randomRGB()})`);
    const newcolor = randomColors.concat({title:'color',color:randomColor})
    setRandomColors(newcolor)
  }
  const removeRandomColor = (i)=>{
    setRandomColor(`rgb(${randomRGB()},${randomRGB()},${randomRGB()})`);
    const newcolor = randomColors.concat({title:'color',color:randomColor})
    setRandomColors(newcolor)
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
            <button onClick={()=>addRandomColor()}>add random color</button>
            <ul>
            {randomColors.map((color, i) => (
              <li key={"color-" + i} style={{color:color.color}}>{color.title}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
