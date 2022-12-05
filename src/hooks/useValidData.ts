import { useMemo, useState } from "react";

import { ValidationApi } from "../api/validationApi";

const useValidData = (email: string, password: string) => {
  const [passwordState, setPasswordState] = useState(
    ValidationApi.validatePassword(password),
  );
  const [emailState, setEmailState] = useState(
    ValidationApi.validateEmail(email),
  );

  useMemo(() => {
    setPasswordState(ValidationApi.validatePassword(password));
    setEmailState(ValidationApi.validateEmail(email));
  }, [password, email]);

  if (passwordState.indexOf(false) === -1 && emailState !== false) return true;

  return false;
};

export default useValidData;
