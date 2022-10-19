import React from "react";

function ModeControlButton({
  icon,
  label,
  setMode,
  isActive,
}: {
  icon: String;
  label: String;
  setMode: Function;
  isActive: boolean;
}) {
  const textColor = isActive ? "text-activePurple" : "text-lightGray";
  const textHover = isActive ? "" : "hover:text-blueMarguerite";

  function changeControlMode() {
    setMode(label == "Preview");
  }

  return (
    <div
      onClick={changeControlMode}
      className={`flex flex-row cursor-pointer justify-center items-center p-1 font-medium ${textColor} ${textHover} `}
    >
      <i className="material-icons-outlined mr-1">{icon}</i>
      {label}
    </div>
  );
}

export default ModeControlButton;
