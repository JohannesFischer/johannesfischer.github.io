import { createContext } from "react";

import { getPreferredColorScheme } from "./utils";

// TODO: change back to getPreferredColorScheme() when light theme is implemented
const ThemeContext = createContext(getPreferredColorScheme());

export default ThemeContext;
