import * as React from "react";
import "./index.css";

const IconButton = ({
  onClick,
  danger,
  children,
}: {
  danger?: boolean,
  onClick: () => void,
  children: React.ReactNode,
}) => (
  <button
      className={`phi-icon-button ${danger ? 'danger' : ''}`}
      onClick={onClick}
  >
    {children}
  </button>
);

export default IconButton;
