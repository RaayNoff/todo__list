import React, { useEffect, useState } from "react";

export const useMenuPosition = (
  elementRef: React.MutableRefObject<HTMLElement | HTMLDivElement | null>
) => {
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (elementRef.current) {
      const elementNode = elementRef.current;
      setMenuPosition({
        top: elementNode.offsetTop,
        left: elementNode.offsetLeft,
      });
    }
  }, [elementRef]);

  return menuPosition;
};
