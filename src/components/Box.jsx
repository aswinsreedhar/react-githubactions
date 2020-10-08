import React, { useContext } from 'react'
import FruitContext from './FruitsContext';
import "./box.css";


function Box() {
    const { fruitlist } = useContext(FruitContext);

    return (
        <div className="boxdiv">
            {
                fruitlist.map((item) => {
                    return <p> {item} </p>
                })
            }
            {/* <p> Apple </p>
            <p> Banana </p>
            <p> Orange </p> */}
        </div>
    )
}

export default Box
