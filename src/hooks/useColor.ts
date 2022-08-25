import { useEffect, useRef } from "react";

export const useColor = (color: string) => {
  const colorRef = useRef<any>(null);

  useEffect(() => {
    if (!colorRef.current) return;

    colorRef.current.style.stroke = color;
  }, [color]);

  return colorRef;
};
