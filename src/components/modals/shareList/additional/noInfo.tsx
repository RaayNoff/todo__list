import React, { FC } from "react";

import s from "./noInfo.module.scss";

const NoInfo: FC = () => {
  return (
    <article className={s.noUsersInfo}>
      <header className={s.noUsersInfo__title}>Организуйте общую работу</header>
      <p className={s.noUsersInfo__desc}>
        Назначайте задачи и сроки выполнения,
        <br />
        обсуждайте детали в комментариях,
        <br />
        держите всех сотрудников в курсе
      </p>
    </article>
  );
};

export default NoInfo;
