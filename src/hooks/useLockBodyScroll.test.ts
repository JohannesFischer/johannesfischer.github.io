import { renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import useLockBodyScroll from "./useLockBodyScroll";

describe("useLockBodyScroll", () => {
  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("sets body overflow to hidden when locked", () => {
    renderHook(() => useLockBodyScroll(true));

    expect(document.body.style.overflow).toBe("hidden");
  });

  it("keeps initial body overflow when not locked", () => {
    document.body.style.overflow = "scroll";

    renderHook(() => useLockBodyScroll(false));

    expect(document.body.style.overflow).toBe("scroll");
  });

  it("restores the original overflow value when locked becomes false", () => {
    document.body.style.overflow = "auto";

    const { rerender } = renderHook(({ locked }) => useLockBodyScroll(locked), {
      initialProps: { locked: true },
    });

    expect(document.body.style.overflow).toBe("hidden");

    rerender({ locked: false });

    expect(document.body.style.overflow).toBe("auto");
  });

  it("restores the original overflow value on unmount", () => {
    document.body.style.overflow = "auto";

    const { unmount } = renderHook(() => useLockBodyScroll(true));

    expect(document.body.style.overflow).toBe("hidden");

    unmount();

    expect(document.body.style.overflow).toBe("auto");
  });

  it("re-locks after toggling back to true", () => {
    const { rerender } = renderHook(({ locked }) => useLockBodyScroll(locked), {
      initialProps: { locked: true },
    });

    rerender({ locked: false });
    expect(document.body.style.overflow).not.toBe("hidden");

    rerender({ locked: true });

    expect(document.body.style.overflow).toBe("hidden");
  });
});
