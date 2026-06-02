import { useEffect } from "react";

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

function useFocusFirst(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const first = ref.current?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();
  }, [ref]);
}

export default useFocusFirst;
