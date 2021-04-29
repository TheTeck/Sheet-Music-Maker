import React from 'react';
import './TimeSignature.css';

export default function TimeSignature ({ timeSig, offset }) {
    return (
        <div style={{ left: `${offset}px` }} className="time-signature">
            <div>{timeSig[0]}</div>
            <div>{timeSig[1]}</div>
        </div>
    )
}