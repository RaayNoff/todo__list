import React, { FC, useState } from "react";
import Add from "./additional/add";
import Indicator from "./additional/indicator";
import s from "./grouper.module.scss";

interface IGrouperProps {
  children?: React.ReactNode;
  groupName: string;
}

const Grouper: FC<IGrouperProps> = ({ children, groupName }) => {
  const [isOpen, SetIsOpen] = useState<boolean>(false);

  return (
    <section className={s.grouper}>
      <section className={s.grouper__control}>
        <div
          className={s.grouper__control_gp1}
          onClick={() => SetIsOpen(!isOpen)}
        >
          <div
            className={
              isOpen
                ? `${s.grouper__indicator_active}`
                : `${s.grouper__indicator}`
            }
          >
            {Indicator()}
          </div>
          <header className={s.grouper__name}>{groupName}</header>
        </div>
        <div className={s.grouper__add}>{Add()}</div>
      </section>
      {isOpen && <div className={s.grouper__content}>{children}</div>}
    </section>
  );
};

export default Grouper;
