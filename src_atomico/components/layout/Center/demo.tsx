import { define } from "preactement";
import Center from "./index";

const Demo = () => (
  <Center containerStyle={{ height: "100px", backgroundColor: "#ea0" }}>
    Foobar
  </Center>
);

define("phi-center-demo", () => Demo);
