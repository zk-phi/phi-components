import { ComponentChildren } from "preact";
import { useMemo, useCallback } from "preact/hooks";
import { define } from "preactement";
import { useProp } from "../../../utils/useProp";
import { useInputValue } from "../../../utils/useInputValue";
import Icon from "../../other/Icon";
import theme from "../../../constants/theme";
import { isDark } from "../../../utils/isDark";
import { css } from "goober";

type CheckboxValue<T> =
  T extends boolean ? any :
  T extends (infer U)[] ? U :
  T;

type Attrs = {
  children: ComponentChildren,
  checked?: string,
  value?: string,
  parent?: HTMLElement,
};

type Props<T> = {
  checked: T,
  onChange: (checked: T, e: Event) => void,
  children: ComponentChildren,
  value?: CheckboxValue<T>,
};

const style = (isSelected: boolean, isRadio: boolean, isDark: boolean ) => {
  const color = theme.color[isDark ? "dark" : "light"];
  return css({
    display: "inline-block",
    padding: 0,
    fontSize: theme.font.size.md,
    lineHeight: 1,
    color: color.fg,
    backgroundColor: "transparent",
    cursor: "pointer",
    border: 0,

    "& > .check": {
      display: "inline-block",
      marginRight: theme.spacing.margin.inline,
      color: isSelected ? color.fg : "transparent",
      backgroundColor: color.bg,
      border: `1px solid ${color.border}`,
      borderRadius: isRadio ? "50%" : theme.borderRadius.sm,
    },

    "&:hover": {
      color: color.neutral.default,
      "& > .check": {
        borderColor: color.neutral.default,
      },
    },

    "&:active": {
      color: color.neutral.active,
      backgroundColor: color.neutral.bg,
      "& > .check": {
        borderColor: color.neutral.active,
      },
    },
  });
};

const Checkbox = <T,>({
  checked,
  value,
  onChange,
  children,
}: Props<T>) => {
  const isRadio = useMemo(() => (
    typeof checked !== "boolean" && !Array.isArray(checked)
  ), [checked]);

  const isSelected = useMemo(() => {
    if (typeof checked === "boolean") {
      return checked;
    } else if (!Array.isArray(checked)) {
      return checked === value;
    } else {
      return checked.findIndex((item) => item === value) !== -1;
    }
  }, [checked, value]);

  const onClick = useCallback((e: Event) => {
    // @ts-ignore
    // I don't know why but typescript does not understand that
    // "T is boolean when (typeof checked === 'boolean') is true"
    // for an example.
    const nextChecked: T = (
      typeof checked === "boolean" ? !checked :
      !Array.isArray(checked) ? value! :
      isSelected ? checked.filter((item) => item !== value!) :
      [...checked, value!]
    );
    onChange(nextChecked, e);
  }, [checked, isSelected, value]);

  const className = useMemo(() => (
    style(isSelected, isRadio, isDark.value)
  ), [isSelected, isRadio, isDark.value]);

  return (
    <button className={ className } onClick={ onClick }>
      <span className="check">
        <Icon icon={ isRadio ? "check-radio" : "check" } />
      </span>
      { children }
    </button>
  );
};

const WCCheckbox = ({
  checked,
  value,
  children,
  parent,
}: Attrs) => {
  const normalizedChecked = useMemo(() => (
    checked == null ? false :
    checked === "" ? true :
    checked === "false" ? false :
    checked === "true" ? true :
    checked
  ), [checked]);

  const [currentValue] = useProp(parent, "value", value);
  const [currentChecked, handleInputValue] = useInputValue(parent, "checked", normalizedChecked);

  return (
    <Checkbox checked={ currentChecked } value={ currentValue } onChange={ handleInputValue }>
      { children }
    </Checkbox>
  );
};

export const register = () => {
  define("phi-checkbox", () => WCCheckbox, {
    attributes: ["checked", "value"],
    formAssociated: true,
  });
};

export default Checkbox;
