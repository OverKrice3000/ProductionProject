import { render } from "react-dom";
import 'shared/config/i18n/i18n';
import "app/styles/index.scss";
import { App } from "app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/themeProvider";

render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById(`root`));
