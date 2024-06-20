import Theme from "vitepress/theme";
import "./custom.css";

if (!import.meta.env.SSR) {
  import("../../src_atomico/main").then((module) => module.register());
  document.documentElement.classList.add("nodark");
}

export default Theme;
