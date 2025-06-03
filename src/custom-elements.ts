import registerButton from "./components/inputs/Button/custom-element";
import registerIconButton from "./components/inputs/IconButton/custom-element";
import registerTextButton from "./components/inputs/TextButton/custom-element";
import "./theme.css";
import "./base.css";

const register = () => {
  registerButton();
  registerIconButton();
  registerTextButton();
};

register.button = registerButton;
register.iconButton = registerIconButton;
register.textButton = registerTextButton;

export default register;
