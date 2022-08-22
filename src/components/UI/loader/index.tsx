import { FC } from "react";
import s from "./loader.module.scss";

interface ILoaderProps {
  isActive?: boolean;
}

const Loader: FC<ILoaderProps> = ({ isActive }) => {
  if (isActive)
    return (
      <svg className={s.svg} viewBox="25 25 50 50">
        <circle className={s.circle} cx="50" cy="50" r="20"></circle>
      </svg>
    );

  return <></>;
};

export default Loader;
