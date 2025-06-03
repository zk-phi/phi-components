import registerButton from "./components/inputs/Button/custom-element";
import "./theme.css";
import "./base.css";

const register = () => {
  registerButton();
};

register.button = registerButton;

export default register;
