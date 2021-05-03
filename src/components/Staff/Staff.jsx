import React, { useState } from 'react';
import Measure from '../../components/Measure/Measure';
import KeySignature from '../../components/KeySignature/KeySignature';
import TimeSignature from '../../components/TimeSignature/TimeSignature';
import './Staff.css';

export default function Staff({ data, keySignature, timeSignature, firstStaff, current, updateStaff, num, isUser }) {
    
    const [measures, setMeasures] = useState(data.split('_m'));
    const [sigWidth, setSigWidth] = useState(0);

    function getSigWidth(width) {
        setSigWidth(width);
    }

    function updateMeasure (notes, measure) {
        let temp = [...measures];
        temp[measure] = notes;
        updateStaff(temp.join('_m'), num);
        setMeasures([...temp]);
    }

    return (
        // Draw the staff with lines and spaces
        <div className="staff-outline">
            <div className="staff-space"></div>
            <div className="staff-line"></div>
            <div className="staff-space"></div>
            <div className="staff-line"></div>
            <div className="staff-space"></div>
            <div className="staff-line"></div>
            <div className="staff-space"></div>

            <div className="clef">𝄞</div>

            {/* Draw the key signature */}
            <KeySignature keySig={keySignature} getSigWidth={getSigWidth} />

            <>
            {/* If it is the first staff, draw the time signature */}
            {
                firstStaff ? <TimeSignature timeSig={timeSignature} offset={41+sigWidth} /> : ''
            }
            </>

            <div style={{ width: `calc(100% - ${38 + sigWidth}px)`, left:  firstStaff ? `${76+sigWidth}px` : `${41+sigWidth}px`}} className="measures">
                {
                    measures.map((measure, index) => {
                        return (
                            <Measure 
                                isUser={isUser}
                                key={index} 
                                data={measure} 
                                wth={ firstStaff ? 181 - ((sigWidth+35)/measures.length) : 181 - (sigWidth/measures.length) } 
                                current={current} 
                                num={index}
                                timeSig={timeSignature} 
                                updateMeasure={updateMeasure} />
                        )
                    })
                }
            </div>
        </div>
    )
}