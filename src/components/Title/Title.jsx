import React, { useState } from "react";
import "./Title.css";

export default function Title({ opus }) {
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
  }

  console.log(opus.title)
  return (
    <>
      {isSettingTitle ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={handleChange} />
        </form>
      ) : (
        <h1 onClick={handleSetTitle}>{title}</h1>
      )}
    </>
  );
}