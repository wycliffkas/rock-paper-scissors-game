import React from "react";

const Controls = (props) => {
  return (
    <div className="control-buttons">
      <button type="button" className="weaponBtn" onClick={props.startGame}>
        Play
      </button>
      <button
        className="button-reset weaponBtn"
        type="button"
        onClick={props.resetGame}
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
