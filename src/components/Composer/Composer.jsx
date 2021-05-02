import React, { useState } from "react";
import "./Composer.css";

export default function Composer({ comp, getUpdatedElement, isUser }) {

  const [composer, setComposer] = useState(comp);
  const [isSettingComposer, setIsSettingComposer] = useState(false);

  function handleSetComposer() {
    setIsSettingComposer(true);
  } 

  function handleChange(e) {
    setComposer(e.target.value);
  }

  function handleSubmitComposer(e) {
    e.preventDefault();

    if (composer === "") {
      setComposer("Anonymous");
      getUpdatedElement('composer', "Anonymous")
    } else {
      getUpdatedElement('composer', composer)
    }
    setIsSettingComposer(false);
  }

  return (
    <>
      {
        isUser ?
          isSettingComposer ? (
            <form onSubmit={handleSubmitComposer}>
              <div>
                <input type="text" id="composer" value={composer} onChange={handleChange} />
              </div>
            </form>
          ) : (
            <div onClick={handleSetComposer}>{composer}</div>
          ) : <div>{composer}</div>
      }
    </>
  );
}