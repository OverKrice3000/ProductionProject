import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { useUserData, useUserInitialized } from "@/entities/User";
import { classNames } from "@/shared/utils/classNames";
import { PageLoader } from "@/pages/PageLoader";
import { useTheme } from "@/shared/utils/theme/useTheme";
import { ApplicationLoaderLayout } from "@/shared/layouts";

import cls from "./layouts/ApplicationLayout/ui/ApplicationLayout.module.scss";
import { ApplicationLayout } from "./layouts/ApplicationLayout";

export const ApplicationWrapper = () => {
  const { theme } = useTheme();
  const userInitialized = useUserInitialized();

  useUserData();

  if (!userInitialized) {
    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <div
            id="app-wrapper"
            className={classNames(`app-wrapper-redesigned`, {}, [theme])}
          >
            <ApplicationLoaderLayout />
          </div>
        }
        off={
          <div
            id="app-wrapper"
            className={classNames(`app-wrapper`, {}, [
              theme,
              cls.applicationLayout,
            ])}
          >
            <PageLoader />
          </div>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <div
          id="app-wrapper"
          className={classNames(`app-wrapper-redesigned`, {}, [theme])}
        >
          <ApplicationLayout />
        </div>
      }
      off={
        <div
          id="app-wrapper"
          className={classNames(`app-wrapper`, {}, [theme])}
        >
          <ApplicationLayout />
        </div>
      }
    />
  );
};
