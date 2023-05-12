
import React from "react";

interface SignUpButtonProps {
  icon: string;
  title: string;
  onClick?: React.MouseEventHandler;
}

export const SignUpButton: React.FC<SignUpButtonProps> = ({
  icon,
  title,
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-start shadow-lg p-3 font-semibold bg-white rounded-md cursor-pointer"
      onClick={onClick}
    >
      <img className="mr-5" src={icon} alt="" />
      <span>{title}</span>
    </div>
  );
};
