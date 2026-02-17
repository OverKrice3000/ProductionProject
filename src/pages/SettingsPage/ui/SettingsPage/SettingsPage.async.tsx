import { lazy } from "react";

import type SettingsPageSync from "./SettingsPage";

const SettingsPage = lazy<typeof SettingsPageSync>(
  async () => await import(`./SettingsPage`),
);

export default SettingsPage;
