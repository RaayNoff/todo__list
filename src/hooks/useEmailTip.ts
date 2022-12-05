import { useMemo, useState } from "react";

import { ValidationApi } from "../api/validationApi";
import { EmailAnswers } from "../types/enums/EmailAnswers";
import { ITipData } from "../types/models/ITipData";

const useEmailTip = (email: string): ITipData => {
  const [emailState, setEmailState] = useState(
    ValidationApi.validateEmail(email),
  );
  const [emailAnswer, setEmailAnswer] = useState(EmailAnswers.INCORRECT_EMAIL);

  useMemo(() => {
    setEmailState(ValidationApi.validateEmail(email));

    emailState
      ? setEmailAnswer(EmailAnswers.CORRECT_EMAIL)
      : setEmailAnswer(EmailAnswers.INCORRECT_EMAIL);
  }, [email, emailState]);

  const emailTip: ITipData = {
    strings: [emailAnswer],
    boolean: [emailState],
  };

  return emailTip;
};
export default useEmailTip;
