import { useEffect } from "react";

const useEscapeKey = (onEscape: () => void, active: boolean): void => {
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onEscape();
    };

    globalThis.addEventListener("keydown", handleKeyDown);

    return () => globalThis.removeEventListener("keydown", handleKeyDown);
  }, [onEscape, active]);
};

export default useEscapeKey;
