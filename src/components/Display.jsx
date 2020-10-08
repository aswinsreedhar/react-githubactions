import React from 'react'
import { useParams } from "react-router-dom";
import List from './List';
import Box from "./Box";
import './display.css'

function Display() {
    let { type } = useParams();
    console.log(type);
    return (
        <div className='display'>
            { type === "list" && <List />}
            { type === "box" && <Box />}
        </div >
    )
}

export default Display
