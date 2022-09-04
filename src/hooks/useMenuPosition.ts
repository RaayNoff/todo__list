import React, { useEffect, useRef } from "react";

export const useMenuPosition = (
  elementRef: React.RefObject<HTMLDivElement>,
  offsetTop: number,
  offsetLeft: number
) => {
  const menuRef = useRef<HTMLMenuElement>(null);

  useEffect(() => {
    if (elementRef.current && menuRef.current) {
      const top = elementRef.current.offsetTop;
      const left = elementRef.current.offsetLeft;

      menuRef.current.style.top = top + offsetTop + "px";
      menuRef.current.style.left = left + offsetLeft + "px";
    }
  }, [elementRef.current?.offsetTop, elementRef.current?.offsetLeft]);

  return menuRef;
};
