import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {AboutPageAsync} from "pages/AboutPage";
import {MainPageAsync} from "pages/MainPage";
import {useTheme} from "shared/utils/theme/useTheme";
import {classNames} from "shared/utils/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={"/"}>Main Page</Link>
            <Link to={"/about"}>About Site</Link>
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