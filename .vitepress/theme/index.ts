import Theme from "vitepress/theme";
import { register } from "../../src/main";
import "./custom.css";

register();

if (document) {
  document.documentElement.classList.add("nodark");
}

export default Theme;
