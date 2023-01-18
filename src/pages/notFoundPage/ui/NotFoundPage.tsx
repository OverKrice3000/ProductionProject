import cls from "./NotFoundPage.module.scss";
import { classNames } from "shared/utils/classNames";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
      <div className={classNames(cls.notFoundPage, {}, [className])}>
        {t(`PageNotFound`)}
      </div>
  );
};
