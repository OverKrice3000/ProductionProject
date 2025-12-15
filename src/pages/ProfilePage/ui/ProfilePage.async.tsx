import { lazy } from "react";
import type ProfilePageSync from "./ProfilePage";

const ProfilePage = lazy<typeof ProfilePageSync>(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 1500));

  return await import(`./ProfilePage`);
});

export default ProfilePage;
