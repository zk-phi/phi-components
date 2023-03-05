import { ComponentChildren } from "preact";
import { createPortal } from "preact/compat";
import { useMemo, useCallback, useRef, useState, useEffect } from "preact/hooks";
import { define } from "preactement";
import { css } from "goober";
import theme from "../../../constants/theme";
import { isDark } from "../../../utils/isDark";
import { useProp } from "../../../utils/useProp";
import { elementIsContained } from "../../../utils/dom";

type Pos = {
  top?: string,
  bottom?: string,
  left?: string,
  right?: string,
  width?: string,
};

type Attrs = {
  anchor?: string,
  width?: string,
  children: ComponentChildren,
  parent?: HTMLElement,
};

type Props = {
  anchor?: Element,
  width?: string,
  onHide?: () => void,
  children: ComponentChildren,
};

const getElementFromQuery = (query?: string): (Element | undefined) => (
  (query && document.querySelector(query)) || undefined
);

const getPopoverPositionFromAnchor = (
  anchor: Element,
  popover: HTMLElement,
): Pos => {
  const pos: Pos = {};
  const rect = anchor.getBoundingClientRect();
  if (rect.left <= window.innerWidth / 2) {
    const left = rect.left + window.scrollX;
    if (left + popover.clientWidth <= document.documentElement.clientWidth) {
      pos.left = `${left}px`;
    } else {
      pos.right = "0";
    }
  } else {
    const right = document.documentElement.clientWidth - (rect.right + window.scrollX);
    if (right - popover.clientWidth < 0) {
      pos.left = "0";
    } else {
      pos.right = `${right}px`;
    }
  }
  if (rect.top < window.innerHeight / 2) {
    const top = rect.bottom + window.scrollY;
    pos.top = `calc(${top}px - ${theme.spacing.margin.sm})`;
  } else {
    const bottom = document.documentElement.clientHeight - (rect.top + window.scrollY);
    pos.bottom = `calc(${bottom}px + ${theme.spacing.margin.sm})`;
  }
  return pos;
};

const style = (isDark: boolean) => {
  return css({
    position: "absolute",
    boxShadow: isDark ? "none" : theme.boxShadow.light.elevated,
    backgroundColor: isDark ? theme.color.dark.elevatedBg : theme.color.light.bg,
    borderRadius: theme.borderRadius.md,
    margin: `${theme.spacing.margin.sm} 0`,
  });
};

const Popover = ({
  anchor,
  width = "auto",
  onHide,
  children,
}: Props) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({});
  const className = useMemo(() => style(isDark.value), [isDark.value]);

  useEffect(() => {
    const refreshPosition = () => {
      const pos = anchor ? getPopoverPositionFromAnchor(anchor, ref.current!) : {};
      if (width === "fit") {
        if (anchor) {
          pos.width = `${anchor.clientWidth}px`;
        }
      } else {
        pos.width = width;
      }
      setPosition(pos);
    };
    const handlePointerdown = (e: PointerEvent) => {
      if (onHide && !elementIsContained(e.target as HTMLElement, ref.current!)) {
        onHide();
      }
    };
    window.addEventListener("pointerdown", handlePointerdown, true);
    window.addEventListener("scroll", refreshPosition, { passive: true });
    window.addEventListener("resize", refreshPosition);
    refreshPosition();
    return () => {
      window.removeEventListener("pointerdown", handlePointerdown, true);
      window.removeEventListener("scroll", refreshPosition);
      window.removeEventListener("resize", refreshPosition);
    };
  }, [setPosition, anchor, onHide, ref.current]);

  const body = (
    <div ref={ ref } className={ className } style={ position }>
      { children }
    </div>
  );

  return createPortal(body, document.body);
};

const WCPopover = ({
  anchor,
  width,
  children,
  parent,
}: Attrs) => {
  const [anchorDom, setAnchorDom] = useProp(parent, "anchor", getElementFromQuery(anchor));
  const onHide = useCallback(() => parent?.dispatchEvent?.(new Event("hide")), [parent]);
  return (
    <Popover anchor={ anchorDom } width={ width } onHide={ onHide }>
      { children }
    </Popover>
  );
};

export const register = () => {
  define("phi-popover", () => WCPopover, {
    attributes: ["anchor", "width"],
  });
};

export default Popover;
