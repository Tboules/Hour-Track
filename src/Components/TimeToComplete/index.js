import React from "react";
import "./TimeToComplete.css";

function TimeToComplete({ modalClose, handleFinish, modalDisplay }) {
  const [numCheck, setNumCheck] = React.useState("e");
  const isNumber = !isNaN(numCheck);
  const error = isNumber ? null : "please input a number above";

  const handleInput = (event) => {
    setNumCheck(event.target.value);
  };

  return (
    <form
      onSubmit={handleFinish}
      style={{ display: modalDisplay }}
      className="completionForm"
      onClick={modalClose}
    >
      <div className="completionBox">
        <h2>How Long did that take?</h2>
        <p className="statementOfCompletion">
          This task took around
          <span>
            <input
              onChange={handleInput}
              name="completionInput"
              className="hourInput"
            />
          </span>
          <br></br>
          hours to
        </p>
        <div style={{ color: "red" }}>{error}</div>
        <button disabled={Boolean(error)} className="modalButt" type="submit">
          complete
        </button>
      </div>
    </form>
  );
}

export default TimeToComplete;
