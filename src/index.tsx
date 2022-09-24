import {render} from "react-dom";
import "./styles/index.scss"
import {App} from "./App";
import "./styles/index.scss";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./theme/ThemeProvider";

render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
document.getElementById("root"))