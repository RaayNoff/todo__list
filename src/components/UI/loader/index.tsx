import { FC } from "react";
import { useColor } from "../../../hooks/useColor";
import { LoaderType } from "../../../types/enums/LoaderType";
import s from "./loader.module.scss";

interface ILoaderProps {
  isActive?: boolean;
  color?: string;
  loaderType?: LoaderType;
}

const Loader: FC<ILoaderProps> = ({
  isActive,
  color = "#fff",
  loaderType = LoaderType.DEFAULT,
}) => {
  const svgRef = useColor(color);

  if (isActive)
    switch (loaderType) {
      case LoaderType.DEFAULT:
        return (
          <svg className={s.svg} viewBox="25 25 50 50">
            <circle
              ref={svgRef}
              className={s.circle}
              cx="50"
              cy="50"
              r="20"
            ></circle>
          </svg>
        );

      case LoaderType.LIST:
        return (
          <div className={s.list}>
            <span className={s.list__span}></span>
            <span className={s.list__span}></span>
            <span className={s.list__span}></span>
            <span className={s.list__span}></span>
          </div>
        );

      default:
        return <svg></svg>;
    }

  return <></>;
};

export default Loader;
