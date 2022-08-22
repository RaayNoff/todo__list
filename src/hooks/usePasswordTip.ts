import { useMemo, useState } from "react";
import { ValidationApi } from "../api/validationApi";
import { ITipData } from "../types/tip";
import { PasswordValidateAnswers } from "../types/validator";

const usePasswordTip = (password: string): ITipData => {
  const [passwordState, setPasswordState] = useState(
    ValidationApi.validatePassword(password)
  );

  useMemo(() => {
    setPasswordState(ValidationApi.validatePassword(password));
  }, [password]);

  const passwordTip = {
    strings: [...PasswordValidateAnswers],
    boolean: [...passwordState],
  };

  return passwordTip;
};

export default usePasswordTip;
