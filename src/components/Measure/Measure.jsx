import React, { useState } from 'react';
import './Measure.css';

export default function Measure({ data, wth }) {

    return (
        <div className="measure-outline" style={{ width: `${wth}px` }}></div>
    )
} 