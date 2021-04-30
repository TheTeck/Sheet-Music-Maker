import React, { useState } from 'react';
import './Measure.css';

export default function Measure({ data, wth, current }) {

    return (
        <div className="measure-outline" style={{ width: `${wth}px` }}>
            <div className="inner-measure-container">
                <div className="highlight F2"></div>
                <div className="highlight E2"></div>
                <div className="highlight D2"></div>
                <div className="highlight C2"></div>
                <div className="highlight B1"></div>
                <div className="highlight A1"></div>
                <div className="highlight G1"></div>
                <div className="highlight F1"></div>
                <div className="highlight E1"></div>
            </div>
        </div>
    )
} 