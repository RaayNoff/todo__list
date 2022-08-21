import { FC, SyntheticEvent, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ValidationApi } from "../../../api/validationApi";
import usePath from "../../../hooks/usePath";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AuthorizationType } from "../../../store/action-creators/authorization";
import { FormInputType } from "../../../types/formInput";
import Tip from "../tip";
import FormFooter from "./additional/formFooter";
import FormHeader from "./additional/formHeader";
import FormInput from "./additional/formInput";
import ResponseSection from "./additional/responseSection";
import s from "./authorizationForm.module.scss";
import "./tip.animation.scss";

interface IAuthorizationProps {
  fetchCallback: AuthorizationType;
}

const AuthorizationForm: FC<IAuthorizationProps> = ({ fetchCallback }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { error, loading } = useTypedSelector((state) => state.authorization);
  const isSignUp = usePath();

  const [displayTip, setDisplayTip] = useState<boolean>(false);
  const [passwordState, setPasswordState] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const onClickHandler = (e: SyntheticEvent): void => {
    e.preventDefault();

    if (isSignUp && passwordState.indexOf(false) === -1) {
      fetchCallback(email, password);
    }
    if (!isSignUp) fetchCallback(email, password);
  };

  useEffect(() => {
    if (isSignUp) setPasswordState(ValidationApi.validatePassword(password));
  }, [password, isSignUp]);

  return (
    <section className={s.authorization}>
      <form className={s.form}>
        <FormHeader isSignUp={isSignUp}></FormHeader>

        <FormInput
          inputType={FormInputType.EMAIL}
          value={email}
          onChangeValue={setEmail}
        />

        <FormInput
          inputType={FormInputType.PASSWORD}
          value={password}
          onChangeValue={setPassword}
          setDisplayTip={setDisplayTip}
        />

        <p className={s.form__error}>{error}</p>

        <TransitionGroup>
          {displayTip && isSignUp && (
            <CSSTransition timeout={300} classNames="tip">
              <Tip tipState={passwordState}></Tip>
            </CSSTransition>
          )}
        </TransitionGroup>

        <ResponseSection
          callback={onClickHandler}
          isLoading={loading}
          isSignUp={isSignUp}
        ></ResponseSection>

        <FormFooter isSignUp={isSignUp}></FormFooter>
      </form>
    </section>
  );
};

export default AuthorizationForm;
