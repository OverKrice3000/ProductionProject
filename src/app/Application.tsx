import { ApplicationProvider } from "app/providers/ApplicationProvider";
import { ApplicationLayout } from "app/layouts/ApplicationLayout";

export const Application = () => {
  return (
      <ApplicationProvider >
          <ApplicationLayout />
      </ApplicationProvider>
  );
};
