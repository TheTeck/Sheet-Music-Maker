import React, { useState } from 'react';
import Note from '../../components/Note/Note';
import './Measure.css';

export default function Measure({ data, wth, current, updateMeasure, timeSig, num}) {

    const [notes, setNotes] = useState(data === "" ? [] : data.split('.'))

    const output = notes.map((note, index) => {
        return (
            <Note key={index} data={note} order={index} wth={wth} timeSig={timeSig} />
        )
    })

    function handleStaffClick (e) {
        if (current === 'qNote' && notes.length < timeSig[0]) {
            let measureStr = notes.join('.');
            measureStr += measureStr === '' ? ('q,' + e.target.id) : ('.q,' + e.target.id);
            updateMeasure(measureStr, num)
            setNotes([
                ...notes,
                'q,' + e.target.id
            ])
        }
    }    

    return (
        <div className="measure-outline" style={{ width: `${wth}px` }}>
            <div className="inner-measure-container">
                <div id="F2" onClick={handleStaffClick} className="F2"></div>
                <div id="E2" onClick={handleStaffClick} className="E2"></div>
                <div id="D2" onClick={handleStaffClick} className="D2"></div>
                <div id="C2" onClick={handleStaffClick} className="C2"></div>
                <div id="B1" onClick={handleStaffClick} className="B1"></div>
                <div id="A1" onClick={handleStaffClick} className="A1"></div>
                <div id="G1" onClick={handleStaffClick} className="G1"></div>
                <div id="F1" onClick={handleStaffClick} className="F1"></div>
                <div id="E1" onClick={handleStaffClick} className="E1"></div>
                {output}
            </div>
        </div>
    )
} 