import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import Composer from '../../components/Composer/Composer';
import ScoreInfo from '../../components/ScoreInfo/ScoreInfo';
import Staff from '../../components/Staff/Staff';
import './Page.css';


export default function Page({ pageNumber, data, opus, makeChanges, getUpdatedElement }) {

    const [staves, setStaves] = useState(data.split('_s'));

    console.log(staves)
    return (
        <>
            <>
            {
                pageNumber === 0 ?
                <>
                    <Title opusTitle={opus.title} getUpdatedElement={getUpdatedElement} />
                    <div className="info">
                        <Composer comp={opus.composer} getUpdatedElement={getUpdatedElement} />
                        <ScoreInfo opusData={opus.opusData} getUpdatedElement={getUpdatedElement} />
                    </div> 
                </> : ''
            }
            </>
            <div className="staff-container">
            {
                staves.map((staff, index) => {
                    return (
                    <Staff key={index} data={staff} />
                )})
            }
            </div>
        </>
    )
}

