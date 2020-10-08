import React, { useContext } from 'react'
import ColorContext from './ColorLayer';

function ColorChanger() {
    const { color, toggleColor } = useContext(ColorContext);

    return (
        <div>
            <button onClick={toggleColor}> {color === '#d2f5e3' ? 'BLUE' : 'GREEN'} </button>
        </div>
    )
}

export default ColorChanger
