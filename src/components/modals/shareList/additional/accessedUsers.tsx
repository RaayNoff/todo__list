import React, { FC } from "react";
import { Colors } from "../../../../types/classes/Colors";
import { IUser } from "../../../../types/models/IUser";
import s from "./accessedUsers.module.scss";

interface IAccessedUsersProps {
  accessedUsers: IUser[];
}

const AccessedUsers: FC<IAccessedUsersProps> = ({ accessedUsers }) => {
  return (
    <section className={s.usersInfo}>
      <header className={s.usersInfo__title}>Пользователи с доступом</header>
      <div className={s.usersInfo__list}>
        {accessedUsers.map((u) => (
          <section key={u.email} className={s.user}>
            <div
              className={s.user__dot}
              style={{
                backgroundColor:
                  Colors.pallete[
                    Math.floor(Math.random() * accessedUsers.length)
                  ].color,
              }}
            ></div>
            <div className={s.user__email}>{u.email}</div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default AccessedUsers;
