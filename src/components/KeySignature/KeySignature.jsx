import React from 'react';
import './KeySignature.css';

export default function KeySignature ({ keySig }) {

    let output;

    if ( (keySig[0] === 'C' && keySig[1] === 'natural' && keySig[2] === 'major') ||
        (keySig[0] === 'A' && keySig[1] === 'natural' && keySig[2] === 'minor')) {
        output = <></>
    } else if ( (keySig[0] === 'G' && keySig[1] === 'natural' && keySig[2] === 'major') ||
        (keySig[0] === 'E' && keySig[1] === 'natural' && keySig[2] === 'minor')) {
        output = <div className="sharp-1">♯</div>
    }

    return (
        <div className="signature">
            {output}
        </div>
    )
}