import { instantiateStyleSheet } from "../utils/stylesheet";
import destyle from "../../contrib/destyle.min.css?inline";
import theme from "./theme.css?inline"
import base from "./base.css?inline";

const baseStyleSheet = instantiateStyleSheet(destyle, theme, base);
export default baseStyleSheet;
