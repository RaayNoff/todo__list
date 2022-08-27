import { useEffect, useRef } from "react";

export const useMenuPositionRef = (
  menuPosition: {
    top: number;
    left: number;
  },
  offsetLeft: number,
  offsetTop: number
) => {
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      const menuNode = menuRef.current;
      menuNode.style.top = `${(menuPosition.top + offsetTop).toString()}px`;
      menuNode.style.left = `${(menuPosition.left + offsetLeft).toString()}px`;
    }
  }, [menuRef, menuPosition, offsetLeft, offsetTop]);

  return menuRef;
};
