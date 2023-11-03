import React from "react";
import "./progress.css";

const Progress = ({ name,persontage }) => {
  return (
    <>
      <div className="progress">
        <div className="flexSB">
          <h3>{name}</h3>
          <h2>{persontage}%</h2>
        </div>
        <progress value={persontage} max="100"></progress>
      </div>
    </>
  );
};

export default Progress;
