import React, { FC } from "react";
import Header from "../../../common/header";
import AuthorizationForm from "../../../UI/authorizationForm";
import checklist from "../../../../icons/welcomeImg.jpg";
import { useActions } from "../../../../hooks/useActions";
import { MaxWidthContainer } from "../../../../types/enums/MaxWidthContainer";
import s from "../noauthorized.module.scss";
import Warning from "../../../common/fixed/Warning.component";

const SingIn: FC = () => {
	const { login } = useActions();
	return (
		<main>
			<Header></Header>
			<section className={s.sign}>
				<div className={MaxWidthContainer.NON_AUTHORIZED}>
					<section className={s.sign__content}>
						<section className={s.welcome}>
							<header className={s.welcome__message}>
								Добро пожаловать на сайт <br /> todoLIST
							</header>
							<img className={s.welcome__img} src={checklist} alt="checklist"></img>
						</section>
						<AuthorizationForm fetchCallback={login} />
					</section>
				</div>
			</section>
			<Warning />
		</main>
	);
};

export default SingIn;
