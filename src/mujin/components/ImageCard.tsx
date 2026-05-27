import React from "react";

import imageOverlay from "../../../assets/images/image-overlay.svg";
import { css } from "../../../styled-system/css";

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  listItems?: string[];
  textContent: string;
  title: string;
}

const ImageCard: React.FunctionComponent<ImageCardProps> = ({
  imageSrc,
  listItems,
  textContent,
  title,
  ...props
}) => {
  return (
    <div
      className={css({
        borderRadius: "xl",
        minBlockSize: "360px",
        overflow: "hidden",
        position: "relative",
        "& > img": {
          objectFit: "fill",
          objectPosition: "center center",
        },
        "& > *": {
          position: "absolute",
        },
      })}
      {...props}
    >
      <div
        className={css({
          bg: "var(--color-body)",
          boxSize: "100%",
          opacity: 0.5,
          zIndex: 2,
        })}
      ></div>
      <img
        alt=""
        aria-hidden="true"
        className={css({ filter: "blur(0.5px)", zIndex: 0 })}
        loading="lazy"
        src={imageSrc}
      />
      <img
        alt=""
        aria-hidden="true"
        className={css({ opacity: 0.5, right: 0, zIndex: 1 })}
        src={imageOverlay}
      />
      <div
        className={css({
          boxSize: "100%",
          color: "var(--color-body-light)",
          display: "flex",
          flexDir: "column",
          inset: 0,
          justifyContent: "space-between",
          p: 4,
          zIndex: 3,
        })}
      >
        <div>
          <h3>{title}</h3>
          <p>{textContent}</p>
        </div>
        <ul
          className={css({
            display: "flex",
            gap: 4,
            "& li": {
              border: "1px solid",
              borderColor: "var(--color-body-light)",
              gap: 2,
              p: 2,
              transition: "all .35s ease-in",
              _hover: {
                bg: "var(--color-body-light)",
                color: "var(--color-body)",
              },
            },
          })}
        >
          {listItems?.map((listItem, index) => (
            <li key={`item-${index}`}>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageCard;
