import cls from "./PageLoader.module.scss";
import { classNames } from "shared/utils/classNames";
import { Loader } from "widgets/Loader";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;
  return (
      <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
      </div>
  );
};
