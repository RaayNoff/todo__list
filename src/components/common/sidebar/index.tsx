import React, { FC } from "react";
import s from "./sidebar.module.scss";

interface ISidebarProps {
  isEnabled: boolean;
}

const Sidebar: FC<ISidebarProps> = ({ isEnabled }) => {
  return (
    <aside
      className={isEnabled ? `${s.sidebar__enabled}` : `${s.sidebar}`}
    ></aside>
  );
};

export default Sidebar;
