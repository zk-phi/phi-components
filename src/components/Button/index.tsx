import * as React from "react";
import "./index.css";

const Button = ({ onClick, children }: {
  onClick: () => void,
  children: React.ReactNode,
}) => (
  <button
      className="phi-button primary"
      onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
