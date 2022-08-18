import React, { FC, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Add from "./additional/add";
import Indicator from "./additional/indicator";
import s from "./grouper.module.scss";
import "./content.animation.scss";

interface IGrouperProps {
  children?: React.ReactNode;
  groupName: string;
}

const Grouper: FC<IGrouperProps> = ({ children, groupName }) => {
  const [isOpen, SetIsOpen] = useState<boolean>(true);

  return (
    <section className={s.grouper}>
      <section className={s.grouper__control}>
        <div
          className={s.grouper__control_clickable}
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
      <TransitionGroup>
        {isOpen && (
          <CSSTransition timeout={200} classNames="content">
            <div className={s.grouper__content}>{children}</div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </section>
  );
};

export default Grouper;
