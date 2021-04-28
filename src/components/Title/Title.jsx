import React, { useState } from "react";
import "./Title.css";

export default function Title({ opus, makeChanges }) {
  const [title, setTitle] = useState(opus.title);
  const [isSettingTitle, setIsSettingTitle] = useState(false);

  function handleSetTitle() {
    setIsSettingTitle(true);
  } 

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit() {
    if (title === "") setTitle("Untitled");
    setIsSettingTitle(false);
    makeChanges();
  }

  return (
    <>
      {isSettingTitle ? (
        <form onSubmit={handleSubmit}>
          <div style={{ height: '64px' }}>
            <input type="text" value={title} onChange={handleChange} />
          </div>
        </form>
      ) : (
        <h1 onClick={handleSetTitle}>{title}</h1>
      )}
    </>
  );
}