import registerButton from "./components/buttons/Button/custom-element";
import registerIconButton from "./components/buttons/IconButton/custom-element";
import registerTextButton from "./components/buttons/TextButton/custom-element";
import registerGroup from "./components/layout/Group/custom-element";
import registerStack from "./components/layout/Stack/custom-element";
import registerIcon from "./components/others/Icon/custom-element";
import "./base.css";

const register = () => {
  if (typeof window !== "undefined") {
    registerButton();
    registerIconButton();
    registerTextButton();
    registerGroup();
    registerStack();
    registerIcon();
  }
};

export default register;
