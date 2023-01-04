import Button, { register as registerButton } from "./components/Button";
import Input, { register as registerInput } from "./components/Input";
import Icon, { register as registerIcon } from "./components/Icon";
import GlobalStyles, { register as registerGlobalStyles } from "./components/GlobalStyles";

const register = () => {
  registerButton();
  registerInput();
  registerIcon();
  registerGlobalStyles();
};

export { Button, Input, Icon, GlobalStyles,  register };
