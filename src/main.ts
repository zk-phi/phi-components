import Button from "./components/Button";
import Input from "./components/Input";
import Icon from "./components/Icon";

const register = () => {
  Button.register();
  Input.register();
  Icon.register();
};

export { Button, Input, Icon, register };
