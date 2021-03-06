import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import Composer from '../../components/Composer/Composer';
import ScoreInfo from '../../components/ScoreInfo/ScoreInfo';
import Staff from '../../components/Staff/Staff';
import './Page.css';


export default function Page({ pageNumber, data, opus, getUpdatedElement, updateMusic, current, isUser }) {

    const [staves, setStaves] = useState(data.split('_s'));

    function updateStaff(staff, num) {
        let temp = [...staves];
        temp[num] = staff;
        updateMusic(temp.join('_s'), pageNumber);
        setStaves([...temp]);
    }

    return (
        <>
            <>
            {
                pageNumber === 0 ?
                <>
                    <Title opusTitle={opus.title} getUpdatedElement={getUpdatedElement} isUser={isUser} />
                    <div className="info">
                        <Composer comp={opus.composer} getUpdatedElement={getUpdatedElement} isUser={isUser} />
                        <ScoreInfo opusData={opus.opusData} getUpdatedElement={getUpdatedElement} isUser={isUser} />
                    </div> 
                </> : ''
            }
            </>
            <div className="staff-container">
            {
                staves.map((staff, index) => {
                    return (
                        <Staff key={index}
                            isUser={isUser}
                            data={staff}
                            keySignature={opus.keySignature}
                            timeSignature={opus.timeSignature}
                            firstStaff={ pageNumber === 0 && index === 0 ? true : false }
                            updateStaff={updateStaff}
                            num={index}
                            current={current} />     
                )})
            }
            </div>
        </>
    )
}

