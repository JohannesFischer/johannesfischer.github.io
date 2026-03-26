import { COLOR_SCHEMES } from "./const";

export const getPreferredColorScheme = () => {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? COLOR_SCHEMES.LIGHT
    : COLOR_SCHEMES;
};
