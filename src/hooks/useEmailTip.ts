import { useMemo, useState } from "react";
import { ValidationApi } from "../api/validationApi";
import { ITipData } from "../types/tip";
import { EmailValidateAnswers } from "../types/validator";

const useEmailTip = (email: string): ITipData => {
  const [emailState, setEmailState] = useState(
    ValidationApi.validateEmail(email)
  );

  useMemo(() => {
    setEmailState(ValidationApi.validateEmail(email));
  }, [email]);

  const emailTip: ITipData = {
    strings: [...EmailValidateAnswers],
    boolean: [emailState],
  };

  return emailTip;
};
export default useEmailTip;
