import { memo } from "react";

import { AppSkeleton } from "../../ui/redesigned/AppSkeleton";
import { AppHStack, AppVStack } from "../../ui/AppStack";
import { MainLayout } from "../MainLayout/MainLayout";
import cls from "./ApplicationLoaderLayout.module.scss";

export const ApplicationLoaderLayout = memo(() => {
  return (
    <MainLayout
      header={
        <AppHStack className={cls.header}>
          <AppSkeleton width={40} height={40} borderRadius="50%" />
        </AppHStack>
      }
      content={
        <AppVStack gap="16" style={{ height: `100%` }}>
          <AppSkeleton width="70%" height={32} borderRadius="16px" />
          <AppSkeleton width="40%" height={20} borderRadius="16px" />
          <AppSkeleton width="50%" height={20} borderRadius="16px" />
          <AppSkeleton width="30%" height={32} borderRadius="16px" />
          <AppSkeleton width="80%" height="40%" borderRadius="16px" />
          <AppSkeleton width="80%" height="40%" borderRadius="16px" />
        </AppVStack>
      }
      sidebar={<AppSkeleton borderRadius="32px" width={220} height="100%" />}
    />
  );
});

ApplicationLoaderLayout.displayName = `AppLoaderLayout`;
