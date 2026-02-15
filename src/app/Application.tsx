import { ApplicationWrapper } from "./ApplicationWrapper";
import { ApplicationProvider } from "./providers/ApplicationProvider";

export const Application = () => {
  return (
    <ApplicationProvider>
      <ApplicationWrapper />
    </ApplicationProvider>
  );
};
