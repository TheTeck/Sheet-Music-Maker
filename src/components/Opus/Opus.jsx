import React, { useState, useEffect } from "react";
import Page from '../../components/Page/Page';
import "./Opus.css";

export default function Opus({ opus, makeChanges, getUpdatedElement}) {

  // this data should be passed as props and created when a new opus is created
  const testData = '_p_s_m_m_m_m_s_m_m_m_m_s_m_m_m_m'

  const [pageNumber, setPageNumber] = useState(1)
  const [data, setData] = useState(testData.split('_p'))


  useEffect(() => {
    // Do something here
  }, [])

  return (
    <div className="page">
      <Page pageNumber={pageNumber} data={data[pageNumber]} opus={opus} makeChanges={makeChanges} getUpdatedElement={getUpdatedElement} />
    </div>
  );
}