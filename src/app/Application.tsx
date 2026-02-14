import { ToggleFeatures } from "@/shared/utils/features";

import { ApplicationProvider } from "./providers/ApplicationProvider";
import { ApplicationLayout } from "./layouts/ApplicationLayout";

export const Application = () => {
  const applicationInternalComponent = (
    <ApplicationProvider>
      <ApplicationLayout />
    </ApplicationProvider>
  );

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <div id="app-wrapper" className="app-wrapper-redesigned">
          {applicationInternalComponent}
        </div>
      }
      off={
        <div id="app-wrapper" className="app-wrapper">
          {applicationInternalComponent}
        </div>
      }
    />
  );
};
