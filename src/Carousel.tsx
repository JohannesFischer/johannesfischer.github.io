import * as React from "react";
import { Children, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { css } from "../styled-system/css";
import { grid, scrollable } from "../styled-system/patterns";

import Button from "./components/Button";

const Carousel: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [firstVisibleIndex, setFirstVisibleIndex] = React.useState(0);
  const [lastVisibleIndex, setLastVisibleIndex] = React.useState(0);

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
        top: 0,
        left: Math.min(
          scrollWidth - scrollItemWidth,
          currentScrollLeft + scrollItemWidth,
        ),
        behavior: "smooth",
      });
    }
  }, []);

  const handleScrollBack = useCallback(() => {
    if (scrollContainer.current) {
      const scrollItemWidth = getScrollItemWidth();
      const currentScrollLeft = scrollContainer.current.scrollLeft;

      scrollContainer.current.scrollTo({
        top: 0,
        left: Math.max(0, currentScrollLeft - scrollItemWidth),
        behavior: "smooth",
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
          gap: 4,
          "& button": { transitionDuration: "fast" },
        })}
      >
        <Button
          aria-label="Scroll to previous item"
          disabled={firstVisibleIndex === 0}
          onClick={handleScrollBack}
        >
          <ChevronLeft />
        </Button>
        <Button
          aria-label="Scroll to next item"
          disabled={lastVisibleIndex === Children.count(children) - 1}
          onClick={handleScrollForward}
        >
          <ChevronRight />
        </Button>
      </div>
      <div
        className={css(
          grid.raw({
            alignItems: "start",
            gridAutoFlow: "column",
            gridAutoColumns: [
              "calc(100vw - token(spacing.4) * 3)",
              "calc(50vw - token(spacing.4) * 2)",
            ],
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
        {(children as React.ReactElement[])?.map((child, index) => (
          <div
            data-carousel-index={String(index)}
            key={`carousel-item-${index}`}
            className={css({
              display: "contents",
              "& > div": {
                display: "grid",
                gridRow: "1/6",
                gridTemplateRows: "subgrid",
                scrollSnapAlign: "start",
              },
            })}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
