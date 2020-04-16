import React from "react";

const Weapons = (props) => {
  return (
    <div>
      <p>Choose weapon</p>
      <button className="weaponBtn" onClick={() => props.selectWeapon("rock")}>
        rock
      </button>
      <button className="weaponBtn" onClick={() => props.selectWeapon("paper")}>
        paper
      </button>
      <button
        className="weaponBtn"
        onClick={() => props.selectWeapon("scissors")}
      >
        scissor
      </button>
    </div>
  );
};

export default Weapons;
