import React, { FC } from "react";
import s from "./header.module.scss";

interface IHeaderProps {
  iconDisplayed?: boolean;
}

const Header: FC<IHeaderProps> = ({ iconDisplayed = false }) => {
  return (
    <header className={s.header}>
      <div className="container">
        <section className={s.header__content}>
          {iconDisplayed && <div className={s.header__profileBackground}></div>}
        </section>
      </div>
    </header>
  );
};

export default Header;
