import Theme from "vitepress/theme";
import register from "../../src/custom-elements";
import "./custom.css";

// Apply styles globally for Pure-CSS examples
import "../../src/preact.ts";

register();

export default Theme;
