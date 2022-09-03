import { useMemo, useState } from "react";
import { RoutePath } from "../types/enums/RoutePath";

const usePath = (): boolean => {
  const [isRegistration, setIsRegistration] = useState<boolean>(false);

  useMemo(() => {
    setIsRegistration(false);
    const path = document.location.hash.replace("#", "");

    if (path === RoutePath.SIGNUP) setIsRegistration(true);
  }, []);

  return isRegistration;
};

export default usePath;
