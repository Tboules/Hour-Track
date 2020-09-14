import React from "react";
import "./TimeToComplete.css";

function TimeToComplete() {
  return (
    <form className="completionForm">
      <div className="completionBox">
        <p className="statementOfCompletion">
          This task took around
          <span>
            <input className="hourInput" />
          </span>
          hours to
          <button type="submit">complete</button>
        </p>
      </div>
    </form>
  );
}

export default TimeToComplete;
