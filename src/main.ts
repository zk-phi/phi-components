import Button, { register as registerButton } from "./components/Button";
import Input, { register as registerInput } from "./components/Input";
import Icon, { register as registerIcon } from "./components/Icon";

const register = () => {
  registerButton();
  registerInput();
  registerIcon();
};

export { Button, Input, Icon, register };
