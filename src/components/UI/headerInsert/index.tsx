import React, { FC } from "react";

import s from "./headerInsert.module.scss";

interface IheaderInsert {
  children?: string;
}

const HeaderInsert: FC<IheaderInsert> = ({ children }) => {
  return (
    <section className={s.headerInsert}>
      <header className={`${s.title} textEllipsis`} title={children}>
        {children}
      </header>
    </section>
  );
};

export default HeaderInsert;
