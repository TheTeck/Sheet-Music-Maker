import React from 'react';
import './Staff.css';

export default function Staff(data) {
    console.log(data)
    return (
        <div className="staff-outline">{data.data}</div>
    )
}