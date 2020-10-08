import React, { useContext } from 'react'
import { Route } from "react-router-dom";
import Display from "./Display";

import ColorContext from './ColorLayer';

import "./detailarea.css"

function DetailArea() {
    const { color } = useContext(ColorContext);
    return (
        <div className="detailArea" style={{ backgroundColor: color }}>
            <Route path="/api/:type">
                <Display />
            </Route>
            <Route path="/" exact>
                <h1> Home path... select an option from above </h1>
            </Route>
        </div>
    )
}

export default DetailArea
