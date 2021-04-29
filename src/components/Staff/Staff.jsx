import React, { useState } from 'react';
import Measure from '../../components/Measure/Measure';
import KeySignature from '../../components/KeySignature/KeySignature';
import './Staff.css';

export default function Staff({ data, keySignature, timeSignature }) {
    
    const [measures, setMeasures] = useState(data.split('_m'));

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

            <KeySignature keySig={keySignature} />

            <div className="measures">
                {
                    measures.map((measure, index) => {
                        return (
                            <Measure key={index} data={measure} />
                        )
                    })
                }
            </div>
        </div>
    )
}