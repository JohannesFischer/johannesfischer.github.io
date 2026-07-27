import type { RefObject } from "react";

import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import useFocusFirst from "./useFocusFirst";

const makeRef = (
  current: HTMLElement | null,
): RefObject<HTMLElement | null> => ({ current });

describe("useFocusFirst", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("focuses the first focusable element in DOM order", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <div>not focusable</div>
      <button>first focusable element</button>
      <a href="/">second forcusable element</a>
    `;
    document.body.append(container);

    act(() => {
      renderHook(() => useFocusFirst(makeRef(container)));
    });

    expect(document.activeElement).toBe(container.querySelector("button"));
  });

  it("skips disabled buttons and inputs", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <button disabled>disabled</button>
      <input disabled />
      <input />
    `;
    document.body.append(container);

    act(() => {
      renderHook(() => useFocusFirst(makeRef(container)));
    });

    expect(document.activeElement).toBe(
      container.querySelector("input:not([disabled])"),
    );
  });

  it("skips elements with tabindex=-1", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <div tabindex="-1">skip this</div>
      <div tabindex="0">use this one</div>
    `;
    document.body.append(container);

    act(() => {
      renderHook(() => useFocusFirst(makeRef(container)));
    });

    expect(document.activeElement).toBe(
      container.querySelector('[tabindex="0"]'),
    );
  });

  it("does nothing when there is no focusable element", () => {
    const container = document.createElement("div");
    container.innerHTML = `<p>no focusable content here</p>`;
    document.body.append(container);

    act(() => {
      renderHook(() => useFocusFirst(makeRef(container)));
    });

    expect(document.activeElement).toBe(document.body);
  });

  it("does not throw when ref.current is null", () => {
    expect(() => {
      act(() => {
        renderHook(() => useFocusFirst(makeRef(null)));
      });
    }).not.toThrow();
  });
});
