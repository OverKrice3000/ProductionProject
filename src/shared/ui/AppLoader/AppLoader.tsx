import cls from "./AppLoader.module.scss";
import { classNames } from "../../utils/classNames";

interface LoaderProps {
  className?: string;
}

export const AppLoader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(cls.ldsFacebook, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
