import type { ComponentChildren, FunctionComponent } from "preact";
import Text from "./icons/Text";
import AlignCenter from "./icons/AlignCenter";
import AlignJustify from "./icons/AlignJustify";
import AlignLeft from "./icons/AlignLeft";
import AlignRight from "./icons/AlignRight";
import Back from "./icons/Back";
import Next from "./icons/Next";
import Decrement from "./icons/Decrement";
import Delete from "./icons/Delete";
import Effect from "./icons/Effect";
import Emoji from "./icons/Emoji";
import File from "./icons/File";
import Image from "./icons/Image";
import Increment from "./icons/Increment";
import Save from "./icons/Save";
import Beer from "./icons/Beer";
import Okay from "./icons/Okay";

type Empty = { [key: string]: never };

const icons: Record<string, FunctionComponent<Empty>> = {
  "beer": Beer,
  "text": Text,
  "align-center": AlignCenter,
  "align-justify": AlignJustify,
  "align-left": AlignLeft,
  "align-right": AlignRight,
  "back": Back,
  "next": Next,
  "decrement": Decrement,
  "delete": Delete,
  "effect": Effect,
  "emoji": Emoji,
  "file": File,
  "image": Image,
  "increment": Increment,
  "save": Save,
  "okay": Okay,
};

const Component = ({ icon }: { icon: string }) => {
  const Icon = icons[icon];
  return Icon ? <Icon /> : null;
};

export default Component;
