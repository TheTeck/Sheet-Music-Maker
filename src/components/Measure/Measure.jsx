import React, { useState } from 'react';
import './Measure.css';

export default function Measure({ data }) {

    const [width, setWidth] = useState(data.split('_w')[0]) // data.split('_w')[1] is rest of data

    return (
        <div className="measure-outline" style={{ width: `${width}px` }}></div>
    )
} 