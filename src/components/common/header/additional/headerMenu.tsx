import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../../hooks/useActions";
import { useMenuPositionRef } from "../../../../hooks/useMenuPositionRef";
import { RoutePath } from "../../../../types/enums/RoutePath";

interface IHeaderMenuProps {
  isDisplaying: boolean;
  setIsDisplaying: React.Dispatch<React.SetStateAction<boolean>>;
  menuPosition: {
    top: number;
    left: number;
  };
}

const HeaderMenu: FC<IHeaderMenuProps> = ({
  isDisplaying,
  setIsDisplaying,
  menuPosition,
}) => {
  const menuRef = useMenuPositionRef(menuPosition, -25, 40);
  const { logout } = useActions();
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    setIsDisplaying((prev) => !prev);
    logout();
    navigate(RoutePath.SIGNUP);
  };

  return (
    <div
      onClick={() => setIsDisplaying((prev) => !prev)}
      className={isDisplaying ? "menu-wrapper active" : "menu-wrapper"}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        ref={menuRef}
        className="menu"
      >
        <p onClick={(e) => handleLogout(e)} className="menu__item">
          Выйти
        </p>
      </section>
    </div>
  );
};

export default HeaderMenu;
