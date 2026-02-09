import { ApplicationProvider } from "./providers/ApplicationProvider";
import { ApplicationLayout } from "./layouts/ApplicationLayout";

export const Application = () => {
  return (
    <ApplicationProvider>
      <ApplicationLayout />
    </ApplicationProvider>
  );
};
