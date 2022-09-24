import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./utils/utils";

export const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={"/"}>Main Page</Link>
            <Link to={"/about"}>About Site</Link>
            <div>
                {theme}
            </div>
            <button onClick={() => toggleTheme()}>
                toggle theme
            </button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync />}></Route>
                    <Route path={"/about"} element={<AboutPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
}