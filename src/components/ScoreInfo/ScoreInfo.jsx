import React, { useState } from "react";
import "./ScoreInfo.css";

export default function ScoreInfo() {
  const [composer, setComposer] = useState("Composer's Name");
  const [opus, setOpus] = useState("Opus Number");

  return (
    <div className="info">
      <div>{composer}</div>
      <div>{opus}</div>
    </div>
  );
}