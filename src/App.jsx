import { SketchPicker } from "react-color";
import "./App.css";
import { useState } from "react";
import {ListGroupComponent} from './components'

function App() {
  const randomRGB = () => {
    return Math.ceil(Math.random() * 255);
  };
  const data = [
    { title: "red", red: 255, green: 0, blue: 0 },
    { title: "green", red: 0, green: 255, blue: 0 },
    { title: "blue", red: 0, green: 0, blue: 255 },
  ];

  const [colors, setColors] = useState(data);
  const [title, setTitle] = useState("");
  const [colorpickerChecked, setColorpickerChecked] = useState(false);
  const [openListGroup, setOpenListGroup] = useState(false);

  const addRandomColor = () => {
    setColors([
      ...colors,
      { title: title, red: randomRGB(), green: randomRGB(), blue: randomRGB() },
    ]);
  };
  const handleColorPicker = (color) => {
    setColors([
      ...colors,
      { title: title, red: color.r, green: color.g, blue: color.b },
    ]);
  };
  const colorpicker = () => {
    if (colorpickerChecked)
      return (
        <div>
          <SketchPicker
            color={{ r: 255, g: 0, b: 0 }}
            onChangeComplete={(e) => handleColorPicker(e.rgb)}
          />
        </div>
      );
  };
  const listGroup = () => {
    if (openListGroup) {
      
      return (<ListGroupComponent />);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>list Aufgabe 1</h1>
          <ul>
            {colors.map((color, i) => (
              <li
                key={"color-" + i}
                style={{
                  color: `rgb(${color.red},${color.green},${color.blue})`,
                }}
              >
                {color.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={() => addRandomColor()}>add random color</button>
          <label htmlFor="colorpicker">colorpicker</label>
          <input
            type="checkbox"
            name="colorpicker"
            id="colorpicker"
            onClick={() => setColorpickerChecked(!colorpickerChecked)}
          />

          {colorpicker()}
          <div>
            <button
              type="button"
              onClick={() => setOpenListGroup(!openListGroup)}
            >
              ListGroup Aufgabe öffnen/schliessen
            </button>
            {listGroup()}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
