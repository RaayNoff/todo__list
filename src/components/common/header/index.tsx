import { FC } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { MaxWidthContainer } from "../../../types/enums/MaxWidthContainer";
import { userDataField } from "../../../types/userDataField";
import ExitSVG from "./additional/exitSVG";
import s from "./header.module.scss";

interface IHeaderProps {
  displayControls?: boolean;
  maxWidthContainer?: MaxWidthContainer;
}

const Header: FC<IHeaderProps> = ({
  displayControls = false,
  maxWidthContainer = MaxWidthContainer.NON_AUTHORIZED,
}) => {
  const { status: isSidebarOpened } = useTypedSelector(
    (state) => state.sidebar
  );
  const { sidebarToggle } = useActions();
  const { user } = useTypedSelector((state) => state.authorization);
  const { logout } = useActions();

  const getSymbol = (email: userDataField) => {
    if (email) return email.substring(0, 1).toUpperCase();

    return "?";
  };

  const onClickedBurger = () => {
    sidebarToggle(!isSidebarOpened);
  };

  const onClickLogout = () => {
    logout();
  };

  return (
    <header className={s.header}>
      <div className={maxWidthContainer}>
        <section className={s.header__content}>
          {displayControls && (
            <div
              className={
                isSidebarOpened
                  ? `${s.burger} ${s.burger__active}`
                  : `${s.burger}`
              }
              onClick={() => onClickedBurger()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {displayControls && (
            <section className={s.header__rightSection}>
              <div className={s.header__profileBackground} title={user.email}>
                {getSymbol(user.email)}
              </div>
              <div className={s.header__logout} onClick={() => onClickLogout()}>
                {ExitSVG()}
              </div>
            </section>
          )}
        </section>
      </div>
    </header>
  );
};

export default Header;
