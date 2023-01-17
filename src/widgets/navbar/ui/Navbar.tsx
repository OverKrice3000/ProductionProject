import cls from "./Navbar.module.scss";
import { classNames } from "shared/utils/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
          <AppLink theme={AppLinkTheme.INVERTED} to={`/`}>Main Page</AppLink>
          <AppLink theme={AppLinkTheme.INVERTED} to={`/about`}>About Site</AppLink>
        </div>
      </div>
  );
};
