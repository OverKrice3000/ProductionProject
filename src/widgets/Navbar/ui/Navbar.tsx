import cls from "./Navbar.module.scss";
import { classNames } from "shared/utils/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
          <AppLink theme={AppLinkTheme.INVERTED} to={`/`}>{t(`Main Page Link`)}</AppLink>
          <AppLink theme={AppLinkTheme.INVERTED} to={`/about`}>{t(`About Page Link`)}</AppLink>
        </div>
      </div>
  );
};
