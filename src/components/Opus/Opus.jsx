import React from "react";
import Title from "../../components/Title/Title";
import ScoreInfo from "../../components/ScoreInfo/ScoreInfo";
import "./Opus.css";

export default function Opus({ opus, makeChanges }) {
  return (
    <div className="page">
      <Title opus={opus} makeChanges={makeChanges} />
      <ScoreInfo />
    </div>
  );
}