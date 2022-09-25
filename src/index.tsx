import {render} from "react-dom";
import "./app/styles/index.scss"
import {App} from "app/App";
import "./app/styles/index.scss";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";

render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
document.getElementById("root"))