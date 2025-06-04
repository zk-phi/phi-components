import registerButton from "./components/inputs/Button/custom-element";
import registerIconButton from "./components/inputs/IconButton/custom-element";
import registerTextButton from "./components/inputs/TextButton/custom-element";
import "./theme.css";
import "./base.css";

const register = () => {
  if (typeof window !== "undefined") {
    registerButton();
    registerIconButton();
    registerTextButton();
  }
};

export default register;
