import Theme from "vitepress/theme";
import { register } from "../../main.ts";
import "./custom.css";

// skip registration during SSR
if (typeof window !==  "undefined") {
  register();
}

export default Theme;
