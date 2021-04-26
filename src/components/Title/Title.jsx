import React, { useState } from "react";
import "./Title.css";

export default function Title() {
  const [title, setTitle] = useState("New Title");
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