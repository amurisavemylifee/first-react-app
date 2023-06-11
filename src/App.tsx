import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { useTheme } from "./theme/useTheme";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <button onClick={toggleTheme}>Toogle theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>

      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route
            path={"/about"}
            element={<AboutPageAsync />}
          />
          <Route
            path={"/"}
            element={<MainPageAsync />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
