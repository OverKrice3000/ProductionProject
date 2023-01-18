import cls from "./Loader.module.scss";
import { classNames } from "shared/utils/classNames";

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;
  return (
      <div className={classNames(cls.ldsFacebook, {}, [className])}>
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
};
