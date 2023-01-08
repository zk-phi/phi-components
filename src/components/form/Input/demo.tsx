import { useState } from "preact/hooks";
import { define } from "preactement";
import Input from "./index";

const Demo = () => {
  const [value, setValue] = useState("abrakadabra");
  return <>
    <Input
        value={ value }
        onChange={ setValue }
        error={ value !== "abrakadabra" } />
    <p>
      value: { value }
      (<button onClick={ () => setValue("abrakadabra") }>reset</button>)
    </p>
  </>;
};

define("phi-input-demo", () => Demo);
