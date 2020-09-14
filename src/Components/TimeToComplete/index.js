import React from "react";
import "./TimeToComplete.css";

function TimeToComplete() {
  return (
    <form className="completionForm">
      <div className="completionBox">
        <h2>How Long did that take?</h2>
        <p className="statementOfCompletion">
          This task took around
          <span>
            <input className="hourInput" />
          </span>
        </p>
        <p className="statementOfCompletion">
          hours
          <span>
            <button className="modalButt" type="submit">
              complete
            </button>
          </span>
        </p>
      </div>
    </form>
  );
}

export default TimeToComplete;
