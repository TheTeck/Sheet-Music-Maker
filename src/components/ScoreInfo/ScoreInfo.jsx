import React, { useState } from "react";
import "./ScoreInfo.css";

export default function ScoreInfo({ opusData, getUpdatedElement, isUser }) {


  const [data, setData] = useState(opusData);
  const [isSettingData, setIsSettingData] = useState(false);

  function handleSetData() {
    setIsSettingData(true);
  }

  function handleChange(e) {
    setData(e.target.value)
  }

  function handleSubmitData(e) {
    e.preventDefault();

    if (data === "") {
      setData("Opus 1");
      getUpdatedElement('opusData', "Opus 1")
    } else {
      getUpdatedElement('opusData', data)
    }
    setIsSettingData(false);
  }

  return (
    <>
      {
        isUser ?
          isSettingData ? (
            <form onSubmit={handleSubmitData}>
              <div>
                <input type="text" id="data" value={data} onChange={handleChange} />
              </div>
            </form>
          ) : (
            <div onClick={handleSetData}>{data}</div>
          ) : <div>{data}</div>
      }
    </>
  );
}