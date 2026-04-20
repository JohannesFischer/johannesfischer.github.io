import { useSyncExternalStore } from "react";

import { COLOR_SCHEMES } from "./const";

const subscribe = (callback: () => void) => {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", callback);

  return () => mql.removeEventListener("change", callback);
};

const getSnapshot = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? COLOR_SCHEMES.DARK
    : COLOR_SCHEMES.LIGHT;

export const usePreferredColorScheme = () => {
  return useSyncExternalStore(subscribe, getSnapshot);
};
