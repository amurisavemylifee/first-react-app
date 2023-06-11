import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { useTheme } from "./providers/ThemeProvider";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/helpers";

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
            element={<AboutPage />}
          />
          <Route
            path={"/"}
            element={<MainPage />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
