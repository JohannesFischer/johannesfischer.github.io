import { createContext } from "react";

import { COLOR_SCHEMES } from "./const";

const ThemeContext = createContext(COLOR_SCHEMES.LIGHT);

export default ThemeContext;
