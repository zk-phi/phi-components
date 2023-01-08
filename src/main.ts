import GlobalStyles, { register as registerGlobalStyles } from "./components/other/GlobalStyles";
import Button, { register as registerButton } from "./components/form/Button";
import Input, { register as registerInput } from "./components/form/Input";
import Checkbox, { register as registerCheckbox } from "./components/form/Checkbox";
import Icon, { register as registerIcon } from "./components/other/Icon";

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
