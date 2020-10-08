import React, { useState, useContext } from 'react';
import FruitContext from './FruitsContext';
import './fruitadder.css'

function FruitAdder() {
    const { addFruitList } = useContext(FruitContext);
    const [fruitval, setFruitVal] = useState("");

    const updateFruits = (e) => {
        e.preventDefault();
        // console.log("fruit added: ", fruitval);
        addFruitList(fruitval);
        setFruitVal("");
    }

    return (
        <div className="fruitadder">
            <form onSubmit={updateFruits}>
                <input type="text" value={fruitval} onChange={(e) => { setFruitVal(e.target.value); }} placeholder="type an item" />
                <button type="submit" onClick={updateFruits}> Add Item </button>
            </form>
        </div>
    )
}

export default FruitAdder
