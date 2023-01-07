import GlobalStyles, { register as registerGlobalStyles } from "./components/GlobalStyles";
import Button, { register as registerButton } from "./components/Button";
import Input, { register as registerInput } from "./components/Input";
import Checkbox, { register as registerCheckbox } from "./components/Checkbox";
import Icon, { register as registerIcon } from "./components/Icon";

const register = () => {
  registerGlobalStyles();
  registerButton();
  registerInput();
  registerCheckbox();
  registerIcon();
};

export {
  GlobalStyles,
  Button,
  Input,
  Checkbox,
  Icon,
  register,
};
