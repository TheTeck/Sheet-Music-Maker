import React from 'react';
import Title from '../../components/Title/Title';
import ScoreInfo from '../../components/ScoreInfo/ScoreInfo';


export default function Page({ pageNumber, data, opus, makeChanges, getUpdatedElement }) {
    console.log(opus)
    return (
        <>
        {
            pageNumber === 1 ?
            <>
                <Title opusTitle={opus.title} getUpdatedElement={getUpdatedElement} />
                <ScoreInfo /> 
            </> : ''
        }
        </>
    )
}

