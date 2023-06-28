import { render } from "react-dom";
import 'shared/config/i18n/i18n';
import "app/styles/index.scss";
import { Application } from "app/Application";

render(<Application />, document.getElementById(`root`));
