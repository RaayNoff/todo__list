import { FC, SyntheticEvent } from "react";
import usePath from "../../../../hooks/usePath";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import Loader from "../../loader";
import s from "./responseSection.module.scss";

interface IResponseSection {
  callback: (e: SyntheticEvent) => void;
  canBeClicked: boolean;
}

const ResponseSection: FC<IResponseSection> = ({ callback, canBeClicked }) => {
  const isRegistration = usePath();
  const { loading } = useTypedSelector((state) => state.authorization);

  return (
    <div className={s.responseSection}>
      {loading ? (
        <Loader isActive={loading} />
      ) : (
        <button
          disabled={isRegistration && canBeClicked}
          className={
            isRegistration ? `${s.button} ${s.btnUp}` : `${s.button} ${s.btnIn}`
          }
          onClick={callback}
        >
          {isRegistration ? "Зарегистрироваться" : "Войти"}
        </button>
      )}
    </div>
  );
};

export default ResponseSection;
