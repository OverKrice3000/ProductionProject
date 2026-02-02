import { lazy } from "react";
import type ProfilePageSync from "./ProfilePage";

const ProfilePage = lazy<typeof ProfilePageSync>(async () => await import(`./ProfilePage`));

export default ProfilePage;
