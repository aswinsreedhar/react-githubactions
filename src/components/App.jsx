import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Heading from "./Heading";
import Choice from "./Choice";
import DetailArea from "./DetailArea";
import ColorContext from "./ColorLayer";
import ColorChanger from "./ColorChanger";
import FruitContext from './FruitsContext';
import "./App.css"
import FruitAdder from './FruitAdder';


function App() {
  const [color, setAppColor] = useState('#00587a');
  const toggleColor = () => {
    console.log('toggleColor called!');
    setAppColor(color === '#d2f5e3' ? '#a3d8f4' : '#d2f5e3');
  };

  const [fruitlist, setFruitList] = useState(['webdev','react','node']);
  const addFruitList = (newitem) => {
    setFruitList([...fruitlist, newitem]);
  };

  return (
    <ColorContext.Provider value={{ color, toggleColor }}>
      <FruitContext.Provider value={{ fruitlist, addFruitList }}>
        <Router>
          <div className="appdiv">
            <Heading />
            <Choice />
            <DetailArea />
            <ColorChanger />
            <FruitAdder />
          </div>
        </Router>
      </FruitContext.Provider>
    </ColorContext.Provider>
  );
}

export default App;
