import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/app/providers/StateProvider";

export const useAppDispatch = () => useDispatch<AppDispatch>();
