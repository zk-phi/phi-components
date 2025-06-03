import { instantiateStyleSheet } from "./utils/stylesheet";
import reset from "../contrib/destyle.min.css?inline";

const resetStyleSheet = instantiateStyleSheet(reset);
export default resetStyleSheet;
