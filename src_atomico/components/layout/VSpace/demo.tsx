import { define } from "preactement";
import Input from "../../form/Input";
import VSpace from "./index";

const Demo = () => (
  <VSpace size="md" align="stretch">
    <Input value="foo" onChange={ () => null } />
    <Input value="bar" onChange={ () => null } />
    <Input value="baz" onChange={ () => null } />
  </VSpace>
);

define("phi-vspace-demo", () => Demo);
