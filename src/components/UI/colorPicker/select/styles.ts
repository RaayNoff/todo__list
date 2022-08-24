import chroma from "chroma-js";
import { StylesConfig } from "react-select";
import { IColor } from "../../../../types/models/IColor";

export const dot = (color: string = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: "' '",
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

export const colorStyles: StylesConfig<IColor> = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? color.alpha(0.5).css()
        : isFocused
        ? color.alpha(0.4).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "pointer",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
      ...dot(data.color),
    };
  },

  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};
