import React, { useState } from "react";
import Page from '../../components/Page/Page';
import "./Opus.css";

export default function Opus({ opus, makeChanges, getUpdatedElement, current}) {

  const [pageNumber, setPageNumber] = useState(0)
  const [data, setData] = useState(opus.music.split('_p'))

  function updateMusic (music, page) {
    let temp = [...data];
    temp[page] = music;
    getUpdatedElement('music', temp.join('_p'))
    setData([...temp]);
  }

  return (
    <div className="page">
      <Page 
        pageNumber={pageNumber} 
        data={data[pageNumber]} 
        updateMusic={updateMusic}
        opus={opus} 
        makeChanges={makeChanges} 
        getUpdatedElement={getUpdatedElement} 
        current={current} />
    </div>
  );
}