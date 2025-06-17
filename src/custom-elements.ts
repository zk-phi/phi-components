import registerButton from "./components/inputs/Button/custom-element";
import registerIconButton from "./components/inputs/IconButton/custom-element";
import registerTextButton from "./components/inputs/TextButton/custom-element";
import registerGroup from "./components/layout/Group/custom-element";
import registerStack from "./components/layout/Stack/custom-element";
import "./theme.css";
import "./base.css";

const register = () => {
  if (typeof window !== "undefined") {
    registerButton();
    registerIconButton();
    registerTextButton();
    registerGroup();
    registerStack();
  }
};

export default register;
