import React from 'react';
import './App.css';
import Color from './components/Color';
import InputData from './components/inputData';
import Timer from './components/Timer';
import timeZones from './config/time-zones';
type ComponentNames = "input" | "timer" | "color";

function App() {
  const [timeZone, setTimeZone] = React.useState("Asia/Jerusalem");
  const [color, setColor] = React.useState("Red");
  const [componentName, setComponentName] = React.useState<ComponentNames>("input");
  const mapComponents: Map<ComponentNames, React.ReactNode> = new Map ();
  mapComponents.set("color", <Color color={color}></Color>);
  mapComponents.set("input", <InputData timeZones={timeZones} injectTimeZone={setTimeZone}></InputData>);
  mapComponents.set("timer", <Timer timeZone={timeZone}></Timer>);

  return (
    <>
      {Array.from(mapComponents.keys()).map(k => <button onClick={() => setComponentName(k)}>{k}</button>)}
      {mapComponents.get(componentName)}
    </>
  )
}

export default App;
