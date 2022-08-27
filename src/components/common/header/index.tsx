import React, { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import { useMenuPosition } from "../../../hooks/useMenuPosition";
import { MaxWidthContainer } from "../../../types/enums/MaxWidthContainer";
import HeaderMenu from "./additional/headerMenu";
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
  const [isMenuDisplaying, setIsMenuDisplaying] = useState<boolean>(false);
  const [isBurgerOpened, SetIsBurgerOpened] = useState<boolean>(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const menuPosition = useMenuPosition(iconRef);

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
          {iconDisplayed && (
            <div
              ref={iconRef}
              className={s.header__profileBackground}
              onClick={() => setIsMenuDisplaying((prev) => !prev)}
            ></div>
          )}
          {iconDisplayed && (
            <HeaderMenu
              menuPosition={menuPosition}
              isDisplaying={isMenuDisplaying}
              setIsDisplaying={setIsMenuDisplaying}
            />
          )}
        </section>
      </div>
    </header>
  );
};

export default Header;
