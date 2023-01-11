import {useTheme} from "shared/utils/theme/useTheme";
import {classNames} from "shared/utils/classNames";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/navbar";
import {ThemeSwitcher} from "widgets/themeSwitcher";

export const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <ThemeSwitcher />
            <AppRouter />
        </div>
    );
}