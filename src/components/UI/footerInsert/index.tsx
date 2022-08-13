import React, { FC } from "react";
import s from "./footerInsert.module.scss";

interface IFooterInsert {
  children?: React.ReactNode;
}

const FooterInsert: FC<IFooterInsert> = ({ children }) => {
  return (
    <section className={s.footerInsert}>
      <div className={s.footerInsert__content}>{children}</div>
    </section>
  );
};

export default FooterInsert;
