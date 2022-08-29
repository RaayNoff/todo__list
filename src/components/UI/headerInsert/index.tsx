import React, { FC } from "react";
import s from "./headerIsert.module.scss";

interface IHeaderIsert {
  children?: string;
}

const HeaderInsert: FC<IHeaderIsert> = ({ children }) => {
  return (
    <section className={s.headerIsert}>
      <header className={`${s.title} textEllipsis`} title={children}>
        {children}
      </header>
    </section>
  );
};

export default HeaderInsert;
