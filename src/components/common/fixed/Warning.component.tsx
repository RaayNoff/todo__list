import { FC } from "react";

import s from "./Warning.module.scss";

const Warning: FC = ({}) => {
	return (
		<article className={s.warning}>
			<header className={s.warning__title}>Warning!</header>
			<main className={s.warning__content}>
				The server is&nbsp;unavailable, the site has been switched
				to&nbsp;development mode. Available routes: /home | /signup | /signin
			</main>
		</article>
	);
};

export default Warning;
