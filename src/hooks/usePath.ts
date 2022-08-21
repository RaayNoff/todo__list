import { useMemo, useState } from "react";
import { RoutePath } from "../types/routes";

const usePath = (): boolean => {
  const [isRegistration, setIsRegistration] = useState<boolean>(false);

  useMemo(() => {
    setIsRegistration(false);

    if (document.location.pathname === RoutePath.SIGNUP)
      setIsRegistration(true);
  }, []);

  return isRegistration;
};

export default usePath;
