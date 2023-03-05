import GlobalStyles, { register as registerGlobalStyles } from "./components/other/GlobalStyles";
import VSpace, { register as registerVSpace } from "./components/layout/VSpace";
import Center, { register as registerCenter } from "./components/layout/Center";
import Button, { register as registerButton } from "./components/form/Button";
import Input, { register as registerInput } from "./components/form/Input";
import Checkbox, { register as registerCheckbox } from "./components/form/Checkbox";
import Icon, { register as registerIcon } from "./components/other/Icon";
import Popover, { register as registerPopover } from "./components/other/Popover";

const register = () => {
  registerGlobalStyles();
  registerVSpace();
  registerCenter();
  registerButton();
  registerInput();
  registerCheckbox();
  registerIcon();
  registerPopover();
};

export {
  GlobalStyles,
  VSpace,
  Center,
  Button,
  Input,
  Checkbox,
  Icon,
  Popover,
  register,
};
