import { FC, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePath from "../../../hooks/usePath";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import useValidData from "../../../hooks/useValidData";
import { AuthorizationType } from "../../../store/action-creators/authorization";
import { FormInputType } from "../../../types/enums/FormInputType";
import { RoutePath } from "../../../types/enums/RoutePath";
import FormFooter from "./additional/formFooter";
import FormHeader from "./additional/formHeader";
import FormInput from "./additional/formInput";
import ResponseSection from "./additional/responseSection";
import s from "./authorizationForm.module.scss";

interface IAuthorizationProps {
  fetchCallback: AuthorizationType;
}

const AuthorizationForm: FC<IAuthorizationProps> = ({ fetchCallback }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { error } = useTypedSelector((state) => state.authorization);
  const isDataValid = useValidData(email, password);
  const isRegistration = usePath();
  const navigate = useNavigate();
  const onClickHandler = (e: SyntheticEvent): void => {
    e.preventDefault();

    fetchCallback(email, password);

    if (isRegistration) {
      navigate(RoutePath.SIGNIN);
    }
  };

  return (
    <form className={s.form}>
      <FormHeader />
      <FormInput
        inputType={FormInputType.EMAIL}
        value={email}
        onChangeValue={setEmail}
      />
      <FormInput
        inputType={FormInputType.PASSWORD}
        value={password}
        onChangeValue={setPassword}
      />
      <p className={s.form__error}>{error}</p>
      <ResponseSection callback={onClickHandler} canBeClicked={!isDataValid} />
      <FormFooter />
    </form>
  );
};

export default AuthorizationForm;
