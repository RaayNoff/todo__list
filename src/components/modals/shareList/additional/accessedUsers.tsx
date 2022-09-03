import { FC } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { IUser } from "../../../../types/models/IUser";
import s from "./accessedUsers.module.scss";

interface IAccessedUsersProps {
  accessedUsers: IUser[];
}

const AccessedUsers: FC<IAccessedUsersProps> = ({ accessedUsers }) => {
  const { user } = useTypedSelector((state) => state.authorization);

  return (
    <section className={s.usersInfo}>
      <header className={s.usersInfo__title}>Пользователи с доступом</header>
      <div className={s.usersInfo__list}>
        {accessedUsers.map(
          (u) =>
            u.email !== user?.email && (
              <article key={u.email} className={s.user}>
                <div className={s.user__dot}></div>
                <div className={s.user__email}>{u.email}</div>
              </article>
            )
        )}
      </div>
    </section>
  );
};

export default AccessedUsers;
