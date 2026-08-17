import { useAnimationFrame } from "motion/react";
import React, { useRef } from "react";

const bars = [
  { w: 4, x: 0 },
  { w: 2, x: 6 },
  { w: 2, x: 12 },
  { w: 2, x: 22 },
  { w: 4, x: 26 },
  { w: 2, x: 32 },
  { w: 2, x: 36 },
  { w: 2, x: 42 },
  { w: 2, x: 46 },
  { w: 4, x: 58 },
  { w: 2, x: 66 },
  { w: 2, x: 70 },
  { w: 2, x: 76 },
  { w: 4, x: 84 },
  { w: 4, x: 92 },
  { w: 2, x: 100 },
  { w: 4, x: 106 },
  { w: 4, x: 114 },
  { w: 4, x: 120 },
  { w: 2, x: 126 },
  { w: 4, x: 132 },
  { w: 4, x: 140 },
  { w: 2, x: 146 },
  { w: 4, x: 154 },
  { w: 2, x: 160 },
  { w: 4, x: 164 },
  { w: 4, x: 172 },
  { w: 4, x: 180 },
  { w: 2, x: 188 },
  { w: 4, x: 192 },
  { w: 4, x: 200 },
  { w: 4, x: 208 },
  { w: 2, x: 216 },
  { w: 4, x: 220 },
  { w: 2, x: 226 },
  { w: 2, x: 232 },
  { w: 4, x: 238 },
  { w: 4, x: 246 },
  { w: 6, x: 256 },
  { w: 4, x: 266 },
  { w: 4, x: 274 },
  { w: 2, x: 280 },
  { w: 2, x: 284 },
  { w: 2, x: 288 },
];

const SVG_H = 55;
const CYCLES = 2;
const SPEED = 400;
const MIN_H = 2;

const BarcodeGlitch: React.FunctionComponent = () => {
  const rectRefs = useRef<(SVGRectElement | null)[]>([]);

  useAnimationFrame((time) => {
    rectRefs.current.forEach((rect, i) => {
      if (!rect) return;
      const phase = (bars[i].x / 290) * Math.PI * 2 * CYCLES;
      const sin = 0.5 + 0.5 * Math.sin(time / SPEED + phase);
      const h = MIN_H + (SVG_H - MIN_H) * sin;
      const y = (SVG_H - h) / 2;
      rect.setAttribute("height", String(h));
      rect.setAttribute("y", String(y));
    });
  });

  return (
    <svg
      height={SVG_H}
      style={{ objectFit: "cover" }}
      viewBox={`0 0 290 ${SVG_H}`}
      width="290"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bars.map((bar, i) => (
        <rect
          fill="black"
          height={SVG_H}
          key={i}
          ref={(el) => {
            rectRefs.current[i] = el;
          }}
          width={bar.w}
          x={bar.x}
          y={0}
        />
      ))}
    </svg>
  );
};

export default BarcodeGlitch;
