import * as React from "react";
import { Children, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { css } from "../styled-system/css";
import { flex, scrollable } from "../styled-system/patterns";

import Button from "./Button";

const Carousel: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [firstVisibleIndex, setFirstVisibleIndex] = React.useState(0);
  const [lastIndexVisibleIndex, setLastVisibleIndex] = React.useState(0);

  const handleScrollEnd = useCallback(() => {
    if (scrollContainer.current) {
      const { scrollLeft } = scrollContainer.current;
      const scrollItemWidth =
        (
          scrollContainer.current.querySelector(
            "[data-carousel-index]",
          ) as HTMLElement
        )?.offsetWidth || 0;

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
  }, []);

  const handleScrollForward = useCallback(() => {
    if (scrollContainer.current) {
      const scrollItemWidth =
        (
          scrollContainer.current.querySelector(
            "[data-carousel-index]",
          ) as HTMLElement
        )?.offsetWidth || 0;

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
      const scrollItemWidth =
        (
          scrollContainer.current.querySelector(
            "[data-carousel-index]",
          ) as HTMLElement
        )?.offsetWidth || 0;

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
      className={css({ display: "flex", flexDir: "column", rowGap: [4, 8] })}
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
          disabled={firstVisibleIndex === 0}
          aria-label="Scroll to previous item"
          onClick={handleScrollBack}
        >
          <ChevronLeft />
        </Button>
        <Button
          aria-label="Scroll to next item"
          disabled={lastIndexVisibleIndex === Children.count(children) - 1}
          onClick={handleScrollForward}
        >
          <ChevronRight />
        </Button>
      </div>
      <div
        className={css(
          flex.raw({}),
          scrollable.raw({ direction: "vertical", hideScrollbar: true }),
          {
            scrollSnapStop: "always",
            scrollSnapType: "x mandatory",
            "& > div": {
              scrollSnapAlign: "start",
              width: [
                "calc(100vw - token(spacing.4) * 3)",
                "calc(50vw - token(spacing.4) * 2)",
              ],
              flexShrink: 0,
            },
          },
        )}
        onScrollEnd={handleScrollEnd}
        ref={scrollContainer}
      >
        {(
          children as React.ReactElement<
            React.RefAttributes<HTMLDivElement> & {
              "data-carousel-index": string;
            }
          >[]
        )?.map((child, index) => (
          <div
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
