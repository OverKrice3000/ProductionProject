import '@/shared/config/i18n/i18n';
import "@/app/styles/index.scss";
import { createRoot } from "react-dom/client";

import { Application } from "@/app/Application";

const container = document.getElementById(`root`) ?? document.body;
const root = createRoot(container);
root.render(<Application />);
