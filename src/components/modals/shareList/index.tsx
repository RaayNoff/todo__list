import React, { FC } from "react";
import { useState } from "react";
import { ButtonTypes } from "../../../types/enums/ButtonTypes";
import { InputSizeTypes } from "../../../types/enums/InputSizeTypes";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useListById } from "../../../hooks/useListById";
import { useActions } from "../../../hooks/useActions";
import { contentApi } from "../../../services/contentApi";
import { IUser } from "../../../types/models/IUser";
import Button from "../../UI/button";
import FooterInsert from "../../UI/footerInsert";
import HeaderInsert from "../../UI/headerInsert";
import Input from "../../UI/input";
import s from "./shareList.module.scss";
import NoInfo from "./additional/noInfo";
import AccessedUsers from "./additional/accessedUsers";

const ShareList: FC = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const { shareList } = useTypedSelector((state) => state.popups);
  const { shareListToggleOff } = useActions();
  const [shareWithUser] = contentApi.useFetchListsShareMutation();
  const { accessedUsers } = useListById(shareList.currentListId);

  const checkAccessedUsers = (users: IUser[] = accessedUsers): boolean => {
    if (users.length < 1) return false;

    return true;
  };

  const onInviteHandler = (e: React.MouseEvent) => {
    shareWithUser({ email: userEmail, listId: shareList.currentListId });
    setUserEmail("");
  };

  return (
    <div
      className={shareList.status ? "popup enabled" : "popup"}
      onClick={() => shareListToggleOff()}
    >
      <form className={s.shareList} onClick={(e) => e.stopPropagation()}>
        <HeaderInsert>Добавить пользователя</HeaderInsert>
        <main
          className={
            checkAccessedUsers()
              ? `${s.shareList__content} ${s.mb146}`
              : `${s.shareList__content} ${s.mb113}`
          }
        >
          <section
            className={
              checkAccessedUsers()
                ? `${s.shareList__clientResponse} ${s.mb36}`
                : `${s.shareList__clientResponse} ${s.mb89}`
            }
          >
            <Input
              size={InputSizeTypes.MEDIUM}
              inputValue={userEmail}
              onChangeCallback={setUserEmail}
              title="Введите Email пользователя"
              placeholder="example@mail.ru"
            ></Input>
            <Button
              btnType={ButtonTypes.ACTION}
              text="Пригласить"
              onClickCallback={onInviteHandler}
            />
          </section>

          {accessedUsers.length >= 1 ? (
            <AccessedUsers accessedUsers={accessedUsers} />
          ) : (
            <NoInfo />
          )}
        </main>
        <FooterInsert />
      </form>
    </div>
  );
};

export default ShareList;
