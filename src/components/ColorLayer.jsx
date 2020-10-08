import React from "react";

const ColorContext = React.createContext(
    {
        color: 'red',
        toggleColor: () => { }
    });

export default ColorContext;