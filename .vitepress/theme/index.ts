import Theme from "vitepress/theme";
import { register } from "../../src/main";
import "./custom.css";

// skip registration during SSR
if (typeof window !==  "undefined") {
  register();
}

export default Theme;
