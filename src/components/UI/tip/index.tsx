import { FC } from "react";
import { ITipData } from "../../../types/models/ITipData";
import usePath from "../../../hooks/usePath";
import PolygonSVG from "./additional/polygonSVG";
import s from "./tip.module.scss";
import "./tip.animation.scss";

interface ITipProps {
  content: ITipData;
}

const Tip: FC<ITipProps> = ({ content }) => {
  const display = usePath();

  if (!display) return null;

  return (
    <section className={s.tip}>
      <div className={s.tip__polygon}>{PolygonSVG()}</div>
      <div className={s.tip__content}>
        {content.strings.map((message, i) => (
          <p
            key={i}
            className={
              content.boolean[i]
                ? `${s.message} ${s.success}`
                : `${s.message} ${s.error}`
            }
          >
            {message}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Tip;
