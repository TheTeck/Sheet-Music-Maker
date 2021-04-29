import React from 'react';
import Title from '../../components/Title/Title';
import Composer from '../../components/Composer/Composer';
import ScoreInfo from '../../components/ScoreInfo/ScoreInfo';
import './Page.css';


export default function Page({ pageNumber, data, opus, makeChanges, getUpdatedElement }) {
    console.log(data.split('_s'))
    return (
        <>
        {
            pageNumber === 1 ?
            <>
                <Title opusTitle={opus.title} getUpdatedElement={getUpdatedElement} />
                <div className="info">
                    <Composer comp={opus.composer} getUpdatedElement={getUpdatedElement} />
                    <ScoreInfo opusData={opus.opusData} getUpdatedElement={getUpdatedElement} />
                </div> 
            </> : ''
        }
        </>
    )
}

