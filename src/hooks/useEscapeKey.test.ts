import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import useEscapeKey from "./useEscapeKey";

const pressKey = (key: string) => {
  act(() => {
    globalThis.dispatchEvent(new KeyboardEvent("keydown", { key }));
  });
};

describe("useEscapeKey", () => {
  it("calls onEscape when Escape pressed and active", () => {
    const onEscape = vi.fn();

    renderHook(() => useEscapeKey(onEscape, true));
    pressKey("Escape");

    expect(onEscape).toHaveBeenCalled();
  });

  it("does not call onEscape for other keys", () => {
    const onEscape = vi.fn();

    renderHook(() => useEscapeKey(onEscape, true));
    pressKey("Enter");

    expect(onEscape).not.toHaveBeenCalled();
  });

  it("does not call onEscape when inactive", () => {
    const onEscape = vi.fn();

    renderHook(() => useEscapeKey(onEscape, false));
    pressKey("Escape");

    expect(onEscape).not.toHaveBeenCalled();
  });

  it("removes listener on unmount", () => {
    const onEscape = vi.fn();

    const { unmount } = renderHook(() => useEscapeKey(onEscape, true));
    unmount();
    pressKey("Escape");

    expect(onEscape).not.toHaveBeenCalled();
  });

  it("re-subscribes when active toggles from false to true", () => {
    const onEscape = vi.fn();

    const { rerender } = renderHook(
      ({ active }) => useEscapeKey(onEscape, active),
      { initialProps: { active: false } },
    );

    pressKey("Escape");
    expect(onEscape).not.toHaveBeenCalled();

    rerender({ active: true });
    pressKey("Escape");

    expect(onEscape).toHaveBeenCalled();
  });

  it("uses latest onEscape after it changes", () => {
    const first = vi.fn();
    const second = vi.fn();

    const { rerender } = renderHook(
      ({ onEscape }) => useEscapeKey(onEscape, true),
      { initialProps: { onEscape: first } },
    );

    rerender({ onEscape: second });
    pressKey("Escape");

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });
});
