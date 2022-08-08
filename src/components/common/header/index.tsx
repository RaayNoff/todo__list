import React, { FC } from "react";
import s from "./header.module.scss";

const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <section className={s.header__content}>
          <div className={s.header__burger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={s.header__profileBackground}></div>
        </section>
      </div>
    </header>
  );
};

export default Header;
