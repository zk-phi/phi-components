import { FunctionComponent } from "preact";
import { define } from "preactement";
import Text from "../icons/Text";
import AlignCenter from "../icons/AlignCenter";
import AlignJustify from "../icons/AlignJustify";
import AlignLeft from "../icons/AlignLeft";
import AlignRight from "../icons/AlignRight";
import Back from "../icons/Back";
import Check from "../icons/Check";
import Decrement from "../icons/Decrement";
import Delete from "../icons/Delete";
import Effect from "../icons/Effect";
import Emoji from "../icons/Emoji";
import File from "../icons/File";
import Image from "../icons/Image";
import Increment from "../icons/Increment";
import CheckRadio from "../icons/CheckRadio";
import Save from "../icons/Save";

type Props = {
  icon: string;
};

const icons: Record<string, FunctionComponent<{}>> = {
  "text": Text,
  "align-center": AlignCenter,
  "align-justify": AlignJustify,
  "align-left": AlignLeft,
  "align-right": AlignRight,
  "back": Back,
  "check": Check,
  "check-radio": CheckRadio,
  "decrement": Decrement,
  "delete": Delete,
  "effect": Effect,
  "emoji": Emoji,
  "file": File,
  "image": Image,
  "increment": Increment,
  "save": Save,
};

const Icon = ({ icon }: Props) => {
  const Component = icons[icon];
  return <Component />;
};

export const register = () => {
  define("phi-icon", () => Icon, {
    attributes: ["icon"],
  });
};

export default Icon;
