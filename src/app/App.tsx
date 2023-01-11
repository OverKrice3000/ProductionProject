import {useTheme} from "shared/utils/theme/useTheme";
import {classNames} from "shared/utils/classNames";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/navbar";

export const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <button onClick={() => toggleTheme()}>
                toggle theme
            </button>
            <AppRouter />
        </div>
    );
}