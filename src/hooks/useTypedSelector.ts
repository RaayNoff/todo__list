import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
