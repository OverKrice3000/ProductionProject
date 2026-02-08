import type { AppDispatch } from "@/app/providers/stateProvider";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
