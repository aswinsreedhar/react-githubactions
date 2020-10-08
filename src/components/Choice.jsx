import React from 'react'
import { Link } from "react-router-dom";
import "./choice.css"

function Choice() {
    return (
        <div className="choicediv">
            <Link to="/api/list">
                <button> List </button>
            </Link>
            <Link to="/api/box">
                <button> Box </button>
            </Link>
        </div>
    )
}

export default Choice
