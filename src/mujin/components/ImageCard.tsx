import React from "react";

import imageOverlay from "../../../assets/images/image-overlay.svg";
import { css } from "../../../styled-system/css";

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  title: string;
}

const ImageCard: React.FunctionComponent<ImageCardProps> = ({
  imageSrc,
  title,
  ...props
}) => {
  return (
    <div
      className={css({
        blockSize: "400px",
        borderRadius: "xl",
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
          height: "100%",
          opacity: 0.5,
          width: "100%",
          zIndex: 2,
        })}
      ></div>
      <img
        alt=""
        aria-hidden="true"
        className={css({ filter: "blur(1px)", zIndex: 0 })}
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
          color: "var(--color-body-light)",
          height: "100%",
          inset: 0,
          p: 4,
          width: "100%",
          zIndex: 3,
        })}
      >
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ImageCard;
