import React, { useState } from "react";
import "./Title.css";

export default function Title({ opusTitle, getUpdatedElement, isUser }) {
  const [title, setTitle] = useState(opusTitle);
  const [isSettingTitle, setIsSettingTitle] = useState(false);

  function handleSetTitle() {
    setIsSettingTitle(true);
  } 

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "") {
      setTitle("Untitled");
      getUpdatedElement('title', "Untitled")
    } else {
      getUpdatedElement('title', title)
    }
    setIsSettingTitle(false);
  }

  return (
    <>
      {
        isUser ?
          isSettingTitle ? (
            <form onSubmit={handleSubmit}>
              <div style={{ height: '64px' }}>
                <input type="text" style={{ fontSize: '50px'}}value={title} onChange={handleChange} />
              </div>
            </form>
          ) : (
            <h1 onClick={handleSetTitle}>{title}</h1>
          ) : <h1>{title}</h1>
     }
    </>
  );
}