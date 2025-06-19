import registerButton from "./components/buttons/Button/custom-element";
import registerIconButton from "./components/buttons/IconButton/custom-element";
import registerTextButton from "./components/buttons/TextButton/custom-element";
import registerGroup from "./components/layout/Group/custom-element";
import registerStack from "./components/layout/Stack/custom-element";
import registerCheckbox from "./components/inputs/Checkbox/custom-element";
import registerOption from "./components/inputs/Option/custom-element";
import registerRadio from "./components/inputs/Radio/custom-element";
import registerTextInput from "./components/inputs/TextInput/custom-element";
import registerNumberInput from "./components/inputs/NumberInput/custom-element";
import registerIcon from "./components/others/Icon/custom-element";
import registerColorSwatch from "./components/others/ColorSwatch/custom-element";
import "./global.css";

const register = () => {
  if (typeof window !== "undefined") {
    registerButton();
    registerIconButton();
    registerTextButton();
    registerGroup();
    registerStack();
    registerCheckbox();
    registerOption();
    registerRadio();
    registerTextInput();
    registerNumberInput();
    registerIcon();
    registerColorSwatch();
  }
};

export default register;
