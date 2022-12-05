import { FC, useEffect } from "react";
import { LockAPI } from "../../../api/lockApi";
import { contentApi } from "../../../services/contentApi";
import { MaxWidthContainer } from "../../../types/enums/MaxWidthContainer";
import Warning from "../../common/fixed/Warning.component";
import Header from "../../common/header";
import HomeContent from "../../common/homeContent";
import Sidebar from "../../common/sidebar";
import CreateList from "../../modals/createList";
import EditList from "../../modals/editList";
import ShareList from "../../modals/shareList";
import TaskInfo from "../../modals/taskInfo";
import s from "./home.module.scss";

const Home: FC = () => {
	const {} = contentApi.useFetchAllListsQuery(0, {
		pollingInterval: 60000,
	});

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768.98px)");
		if (mediaQuery.matches) {
			LockAPI.toggleScrollLock();
		}
	}, []);

	return (
		<>
			<Header
				displayControls={true}
				maxWidthContainer={MaxWidthContainer.AUTHORIZED}
			/>
			<section className={s.home}>
				<Sidebar />
				<HomeContent />
			</section>
			<CreateList />
			<ShareList />
			<TaskInfo />
			<EditList />
			<Warning />
		</>
	);
};

export default Home;
