import Theme from "vitepress/theme";
import { register } from "../../src/main";
import { isSSR } from "../../src/utils/isSSR";
import "./custom.css";

register();

if (!isSSR) {
  document.documentElement.classList.add("nodark");
}

export default Theme;
