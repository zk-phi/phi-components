import * as React from "react";
import "./index.css";

const TextButton = ({
  onClick,
  danger,
  children,
}: {
  danger?: boolean,
  onClick: () => void,
  children: React.ReactNode,
}) => (
  <button
      className={`phi-text-button ${danger ? 'danger' : ''}`}
      onClick={onClick}
  >
    {children}
  </button>
);

export default TextButton;
