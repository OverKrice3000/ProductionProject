import '@/shared/config/i18n/i18n';
import "@/app/styles/index.scss";
import { Application } from "@/app/Application";
import { createRoot } from "react-dom/client";

const container = document.getElementById(`root`) ?? document.body;
const root = createRoot(container);
root.render(<Application />);
