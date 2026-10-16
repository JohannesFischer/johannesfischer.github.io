import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { Children, useCallback, useRef, useState } from "react";

import { css } from "../../../styled-system/css";
import { grid, scrollable } from "../../../styled-system/patterns";

const navButtonStyles = css({
  alignItems: "center",
  background: "var(--color-bg-alt)",
  border: "1px solid var(--color-border)",
  color: "var(--color-text)",
  cursor: "pointer",
  display: "flex",
  height: "2.5rem",
  justifyContent: "center",
  transition: "background 0.15s, border-color 0.15s",
  width: "2.5rem",
  _disabled: {
    cursor: "default",
    opacity: 0.35,
  },
  _hover: {
    _disabled: {
      borderColor: "var(--color-border)",
    },
    borderColor: "var(--color-accent)",
  },
});

/**
 * Horizontal scroll carousel with prev/next navigation buttons.
 * Tracks visible item indices to disable navigation buttons at the boundaries.
 * Each direct child must be wrapped in a `<div>` so subgrid row alignment works correctly.
 */
const Carousel: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);
  const [lastVisibleIndex, setLastVisibleIndex] = useState(0);

  const getScrollItemWidth = () =>
    (
      scrollContainer?.current?.querySelector("[data-carousel-index]")
        ?.firstChild as HTMLElement
    )?.offsetWidth || 0;

  const handleScrollEnd = useCallback(() => {
    if (scrollContainer.current) {
      const { scrollLeft } = scrollContainer.current;
      const scrollItemWidth = getScrollItemWidth();

      const firstIndex = Math.ceil(scrollLeft / scrollItemWidth);
      setFirstVisibleIndex(firstIndex);
      setLastVisibleIndex(
        Math.floor(
          scrollContainer.current.offsetWidth / scrollItemWidth +
            firstIndex -
            1,
        ),
      );
    }
  }, [setFirstVisibleIndex, setLastVisibleIndex]);

  const handleScrollForward = useCallback(() => {
    if (scrollContainer.current) {
      const scrollItemWidth = getScrollItemWidth();
      const { scrollWidth } = scrollContainer.current;
      const currentScrollLeft = scrollContainer.current.scrollLeft;

      scrollContainer.current.scrollTo({
        behavior: "smooth",
        left: Math.min(
          scrollWidth - scrollItemWidth,
          currentScrollLeft + scrollItemWidth,
        ),
        top: 0,
      });
    }
  }, []);

  const handleScrollBack = useCallback(() => {
    if (scrollContainer.current) {
      const scrollItemWidth = getScrollItemWidth();
      const currentScrollLeft = scrollContainer.current.scrollLeft;

      scrollContainer.current.scrollTo({
        behavior: "smooth",
        left: Math.max(0, currentScrollLeft - scrollItemWidth),
        top: 0,
      });
    }
  }, []);

  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        rowGap: [4, 8],
      })}
    >
      <div
        className={css({
          alignSelf: "flex-end",
          display: "flex",
          flexDirection: "row",
          gap: 3,
        })}
      >
        <button
          aria-label="Scroll to previous item"
          className={navButtonStyles}
          disabled={firstVisibleIndex === 0}
          onClick={handleScrollBack}
          type="button"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          aria-label="Scroll to next item"
          className={navButtonStyles}
          disabled={lastVisibleIndex === Children.count(children) - 1}
          onClick={handleScrollForward}
          type="button"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div
        className={css(
          grid.raw({
            alignItems: "start",
            gridAutoColumns: [
              "calc(100vw - token(spacing.4) * 3)",
              "calc(50vw - token(spacing.4) * 2)",
            ],
            gridAutoFlow: "column",
            gridTemplateRows: "max-content auto max-content max-content",
            rowGap: 2,
          }),
          scrollable.raw({
            direction: "vertical",
            hideScrollbar: true,
          }),
          {
            scrollSnapStop: "always",
            scrollSnapType: "x mandatory",
          },
        )}
        onScrollEnd={handleScrollEnd}
        ref={scrollContainer}
      >
        {Children.toArray(children).map((child, index) => (
          <div
            className={css({
              display: "contents",
              "& > div": {
                display: "grid",
                gridRow: "1/6",
                gridTemplateRows: "subgrid",
                scrollSnapAlign: "start",
              },
            })}
            data-carousel-index={String(index)}
            key={`carousel-item-${index}`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
