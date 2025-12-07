import { ApplicationProvider } from "app/providers/ApplicationProvider";
import { ApplicationLayout } from "app/layouts/ApplicationLayout";
import { useUserData } from "entities/user/model/hooks/useUserData";

export const Application = () => {
  useUserData();

  return (
      <ApplicationProvider >
          <ApplicationLayout />
      </ApplicationProvider>
  );
};
