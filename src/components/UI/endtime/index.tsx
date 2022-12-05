import { FC, useEffect, useState } from "react";

import DateApi from "../../../api/dateApi";
import { timestamp } from "../../../types/Timestamp";

import s from "./endtime.module.scss";

interface IEndtimeProps {
	timestamp: timestamp;
}

const Endtime: FC<IEndtimeProps> = ({ timestamp }) => {
	const [date, setDate] = useState(DateApi.getEndtime(timestamp));

	useEffect(() => {
		setDate(DateApi.getEndtime(timestamp));
	}, [timestamp]);

	return (
		<section className={s.endtime}>
			<div className={s.endtime__box}></div>
			<p className={s.endtime__text}>{date}</p>
		</section>
	);
};

export default Endtime;
