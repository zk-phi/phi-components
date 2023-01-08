import { useState } from "preact/hooks";
import { define } from "preactement";
import Checkbox from "./index";

const Demo = () => {
  const [booleanChecked, setBooleanChecked] = useState(false);
  const [radioChecked, setRadioChecked] = useState("foo");
  const [multiChecked, setMultiChecked] = useState(["p", "l", "u", "r"]);
  return <>
    <p>
      <Checkbox checked={ booleanChecked } onChange={ setBooleanChecked }>
        I understand how to use this component.
      </Checkbox>
    </p>
    <p>
      <Checkbox checked={ radioChecked } onChange={ setRadioChecked } value="foo">I</Checkbox>
      <Checkbox checked={ radioChecked } onChange={ setRadioChecked } value="bar">am</Checkbox>
      <Checkbox checked={ radioChecked } onChange={ setRadioChecked } value="baz">a</Checkbox>
      <Checkbox checked={ radioChecked } onChange={ setRadioChecked } value="qux">radio</Checkbox>
    </p>
    <p>
      <Checkbox checked={ multiChecked } onChange={ setMultiChecked } value="p">Peace</Checkbox>
      <Checkbox checked={ multiChecked } onChange={ setMultiChecked } value="l">Love</Checkbox>
      <Checkbox checked={ multiChecked } onChange={ setMultiChecked } value="u">Unity</Checkbox>
      <Checkbox checked={ multiChecked } onChange={ setMultiChecked } value="r">Respect</Checkbox>
    </p>
  </>;
};

define("phi-checkbox-demo", () => Demo);
