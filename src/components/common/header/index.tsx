import React, { FC, SyntheticEvent, useState } from "react";
import { MaxWidthContainer } from "../../../types/maxWidthContainer";
import s from "./header.module.scss";

interface IHeaderProps {
  iconDisplayed?: boolean;
  burgerCallback?: () => void;
  maxWidthContainer?: MaxWidthContainer;
}

const Header: FC<IHeaderProps> = ({
  iconDisplayed = false,
  burgerCallback,
  maxWidthContainer = MaxWidthContainer.NON_AUTHORIZED,
}) => {
  const [isBurgerOpened, SetIsBurgerOpened] = useState<boolean>(false);

  const onClickedBurger = (e: SyntheticEvent) => {
    SetIsBurgerOpened(!isBurgerOpened);
    if (burgerCallback) burgerCallback();
  };

  return (
    <header className={s.header}>
      <div className={maxWidthContainer}>
        <section className={s.header__content}>
          {burgerCallback && (
            <div
              className={
                isBurgerOpened
                  ? `${s.burger} ${s.burger__active}`
                  : `${s.burger}`
              }
              onClick={(e) => onClickedBurger(e)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {iconDisplayed && <div className={s.header__profileBackground}></div>}
        </section>
      </div>
    </header>
  );
};

export default Header;
