import { Link } from "react-router-dom";

import { useTheme } from "./providers/ThemeProvider";

import { classNames } from "shared/helpers";
import { AppRouter } from "./providers/AppRouter";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <button onClick={toggleTheme}>Toogle theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>

      <AppRouter />
    </div>
  );
};
export default App;
