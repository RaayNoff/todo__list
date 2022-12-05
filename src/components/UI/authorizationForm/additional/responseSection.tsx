import { FC, SyntheticEvent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import usePath from "../../../../hooks/usePath";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import Loader from "../../loader";

import LockSVG from "./lockSVG";
import "./lock.animation.scss";
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
          disabled={canBeClicked}
          className={
            isRegistration ? `${s.button} ${s.btnUp}` : `${s.button} ${s.btnIn}`
          }
          onClick={callback}
        >
          <TransitionGroup>
            {canBeClicked && (
              <CSSTransition timeout={300} classNames="lock">
                <div className={s.lock}>{LockSVG()}</div>
              </CSSTransition>
            )}
          </TransitionGroup>
          {isRegistration ? "Зарегистрироваться" : "Войти"}
        </button>
      )}
    </div>
  );
};

export default ResponseSection;
