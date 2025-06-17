import type { ComponentChildren, FunctionComponent } from "preact";
import Text from "./icons/Text";
import AlignCenter from "./icons/AlignCenter";
import AlignJustify from "./icons/AlignJustify";
import AlignLeft from "./icons/AlignLeft";
import AlignRight from "./icons/AlignRight";
import Back from "./icons/Back";
import Next from "./icons/Next";
import Check from "./icons/Check";
import Decrement from "./icons/Decrement";
import Delete from "./icons/Delete";
import Effect from "./icons/Effect";
import Emoji from "./icons/Emoji";
import File from "./icons/File";
import Image from "./icons/Image";
import Increment from "./icons/Increment";
import CheckRadio from "./icons/CheckRadio";
import Save from "./icons/Save";

type Empty = { [key: string]: never };

const icons: Record<string, FunctionComponent<Empty>> = {
  "text": Text,
  "align-center": AlignCenter,
  "align-justify": AlignJustify,
  "align-left": AlignLeft,
  "align-right": AlignRight,
  "back": Back,
  "next": Next,
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

const Component = ({ icon }: { icon: string }) => {
  const Icon = icons[icon];
  return Icon ? <Icon /> : null;
};

export default Component;
