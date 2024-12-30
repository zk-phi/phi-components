import * as React from "react";
import "./index.css";

const Button = ({
  onClick,
  danger,
  variant = "default",
  icon,
  children,
}: {
  danger?: boolean,
  variant: "default" | "primary" | "dotted" | "text" | "icon",
  onClick: () => void,
  icon?: React.ReactNode,
  children: React.ReactNode,
}) => (
  <button
      className={`phi-button ${variant} ${danger ? 'danger' : ''}`}
      onClick={onClick}
  >
    {icon && <span className="attach-icon">{icon}</span>}
    {children}
  </button>
);

export default Button;
