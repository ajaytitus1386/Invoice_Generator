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
    <div>
      <div
        onClick={changeControlMode}
        className={`flex flex-row items-center p-1 font-medium ${textColor} ${textHover} `}
      >
        <i className="material-icons-outlined mr-1">{icon}</i>
        {label}
      </div>

      <div
        className={`h-1 w-full bg-activePurple rounded-lg ${
          isActive ? "" : "invisible"
        }`}
      ></div>
    </div>
  );
}

export default ModeControlButton;
