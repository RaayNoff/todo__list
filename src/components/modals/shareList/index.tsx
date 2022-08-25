import React, { FC, SyntheticEvent } from "react";
import { useState } from "react";
import { ButtonTypes } from "../../../types/enums/ButtonTypes";
import { Colors } from "../../../types/classes/Colors";
import { InputSizeTypes } from "../../../types/enums/InputSizeTypes";
import { IUser } from "../../../types/models/IUser";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useListById } from "../../../hooks/useListById";
import { useActions } from "../../../hooks/useActions";
import { listApi } from "../../../services/listApi";
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
  const { shareListToggleOff, fetchLists } = useActions();
  const [shareWithUser, {}] = listApi.useShareListMutation();
  const { accessedUsers } = useListById(shareList.currentListId);

  const onInviteHandler = (e: React.MouseEvent) => {
    shareWithUser({ email: userEmail, listId: shareList.currentListId });
    fetchLists();
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
            accessedUsers.length >= 1
              ? `${s.shareList__content} ${s.mb146}`
              : `${s.shareList__content} ${s.mb113}`
          }
        >
          <section
            className={
              accessedUsers.length === 0
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
