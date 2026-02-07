import { lazy } from "react";
import type AdminPanelPageSync from "./AdminPanelPage";

const AdminPanelPage = lazy<typeof AdminPanelPageSync>(async () => await import(`./AdminPanelPage`));

export default AdminPanelPage;
