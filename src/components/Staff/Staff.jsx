import React, { useState } from 'react';
import Measure from '../../components/Measure/Measure';
import KeySignature from '../../components/KeySignature/KeySignature';
import './Staff.css';

export default function Staff({ data, keySignature, timeSignature }) {
    
    const [measures, setMeasures] = useState(data.split('_m'));
    const [sigWidth, setSigWidth] = useState(0);

    function getSigWidth(width) {
        setSigWidth(width);
    }

    console.log(sigWidth)

    return (
        <div className="staff-outline">
            <div className="staff-space"></div>
            <div className="staff-line"></div>
            <div className="staff-space"></div>
            <div className="staff-line"></div>
            <div className="staff-space"></div>
            <div className="staff-line"></div>
            <div className="staff-space"></div>

            <div className="clef">𝄞</div>

            <KeySignature keySig={keySignature} getSigWidth={getSigWidth} />

            <div style={{ width: `calc(100% - ${38 + sigWidth}px)`, left: `${41+sigWidth}px`}} className="measures">
                {
                    measures.map((measure, index) => {
                        return (
                            <Measure key={index} data={measure} wth={181 - (sigWidth/measures.length)} />
                        )
                    })
                }
            </div>
        </div>
    )
}