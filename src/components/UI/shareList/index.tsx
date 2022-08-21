import { FC, SyntheticEvent } from "react";
import { useState } from "react";
import { ButtonTypes } from "../../../types/button";
import { Colors } from "../../../types/color";
import { InputSizeTypes } from "../../../types/input";
import { IUser } from "../../../types/user";
import Button from "../button";
import FooterInsert from "../footerInsert";
import HeaderInsert from "../headerInsert";
import Input from "../input";
import s from "./shareList.module.scss";

interface IShareListProps {
  users?: IUser[];
}

const ShareList: FC<IShareListProps> = ({ users }) => {
  const [userEmail, setUserEmail] = useState<string>("");

  const onClickHandler = (e: SyntheticEvent) => {
    //console.log(userEmail);
  };

  return (
    <form className={s.shareList}>
      <HeaderInsert>Добавить пользователя</HeaderInsert>

      <main
        className={
          users
            ? `${s.shareList__content} ${s.mb146}`
            : `${s.shareList__content} ${s.mb113}`
        }
      >
        <section
          className={
            users
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
            onClickCallback={onClickHandler}
          />
        </section>

        {users ? (
          <section className={s.usersInfo}>
            <header className={s.usersInfo__title}>
              Пользователи с доступом
            </header>
            <div className={s.usersInfo__list}>
              {users.map((u) => (
                <section key={u.email} className={s.user}>
                  <div
                    className={s.user__dot}
                    style={{
                      backgroundColor:
                        Colors.pallete[Math.floor(Math.random() * users.length)]
                          .color,
                    }}
                  ></div>
                  <div className={s.user__email}>{u.email}</div>
                </section>
              ))}
            </div>
          </section>
        ) : (
          <article className={s.noUsersInfo}>
            <header className={s.noUsersInfo__title}>
              Организуйте общую работу
            </header>
            <p className={s.noUsersInfo__desc}>
              Назначайте задачи и сроки выполнения,
              <br />
              обсуждайте детали в комментариях,
              <br />
              держите всех сотрудников в курсе
            </p>
          </article>
        )}
      </main>
      <FooterInsert />
    </form>
  );
};

export default ShareList;
