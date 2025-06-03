import registerButton from "./components/inputs/Button/custom-element";
import "./style.css";
import "../contrib/destyle.min.css";

const register = () => {
  registerButton();
};

register.button = registerButton;

export default register;
