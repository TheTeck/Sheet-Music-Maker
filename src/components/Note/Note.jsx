import React, { useState } from 'react';
import './Note.css';

export default function Note ({ data, order, wth, timeSig, getNoteClick }) {

    const [duration, setDuration] = useState(data.split(',')[0]);
    const [pitch, setPitch] = useState(data.split(',')[1]);

    function handleNoteClick() {
        getNoteClick(order)
    }

    let symbol;

    if (duration === 'q') {
        if (pitch === 'F2')
            symbol = <div className="note-F2">♩</div>
        if (pitch === 'E2')
            symbol = <div className="note-E2">♩</div>
        if (pitch === 'D2')
            symbol = <div className="note-D2">♩</div>
        if (pitch === 'C2')
            symbol = <div className="note-C2">♩</div>
        if (pitch === 'B1')
            symbol = <div className="note-B1">♩</div>
        if (pitch === 'A1')
            symbol = <div className="note-A1">♩</div>
        if (pitch === 'G1')
            symbol = <div className="note-G1">♩</div>
        if (pitch === 'F1')
            symbol = <div className="note-F1">♩</div>
        if (pitch === 'E1')
            symbol = <div className="note-E1">♩</div>
    }

    return (
        <div className="note-container" onClick={handleNoteClick} style={{ width: `${wth/timeSig[0]}px`, left: `${(wth/timeSig[0])*order}px` }}>
            {symbol}
        </div>
    )
}