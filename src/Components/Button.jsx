import React from "react";

function Button({
  children,
  type = " button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...Props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg 
    ${bgColor} ${textColor} ${className}`}{...Props}
    >
      {children}
    </button>
  );
}

export default Button;
