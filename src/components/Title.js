// src/Title.js
import './Title.css';

import React from 'react'

function Title(props) {
    return (
        <span className="Title">
            <h2>{ props.title }</h2>
        </span>
    )
}

export default Title
