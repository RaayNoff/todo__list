import React, { FC } from "react";
import s from "./loader.module.scss";

interface ILoaderProps {
  isActive?: boolean;
}

const Loader: FC<ILoaderProps> = ({ isActive }) => {
  if (isActive) return <div className={s.loader}></div>;

  return <></>;
};

export default Loader;
