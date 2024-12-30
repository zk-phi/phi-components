import * as React from "react";
import "./index.css";

const Button = ({ children }: {
  children: React.ReactNode,
}) => (
  <button className="phi-button">{children}</button>
);

export default Button;
