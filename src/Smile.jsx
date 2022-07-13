import * as d3 from "d3";
import { useEffect } from "react";

const w = 550;
const h = 550;
const eyeRadius = 90;
const eyesOffset = 100;
const eyesBallsY = 30;
const eyesBallsDiagonal = 30;
const monthMarginTop = 25;
const eye = d3
  .arc()
  .innerRadius(eyeRadius)
  .outerRadius(0)
  .startAngle(0)
  .endAngle(3.14);

const mouthSize = eyeRadius * 2 + (eyesOffset - eyeRadius);
const mouth = d3
  .arc()
  .innerRadius(mouthSize)
  .outerRadius(0)
  .startAngle(0)
  .endAngle(3.14);

const baseTongue = d3
  .arc()
  .innerRadius(20)
  .outerRadius(0)
  .startAngle(0)
  .endAngle(3.14);

function Smile() {
  useEffect(() => {}, []);
  return (
    <svg width={w} height={h}>
      <circle
        fill={"yellow"}
        stroke={"black"}
        stroke-width={10}
        r={w / 2 - 20}
        cx={w / 2}
        cy={h / 2}
      />

      <path
        d={eye()}
        stroke={"black"}
        stroke-width="10"
        fill="white"
        transform={`translate(${w / 2 + eyesOffset},${h / 2}),rotate(-90)`}
      />
      <path
        d={eye()}
        stroke={"black"}
        stroke-width="10"
        fill="white"
        transform={`translate(${w / 2 - eyesOffset} ,${h / 2}),rotate(-90)`}
      />
      <path
        d={mouth()}
        fill="#8c7b1d"
        transform={`translate(${w / 2} ,${h / 2 + monthMarginTop}),rotate(90)`}
      />
      <path
        d={baseTongue()}
        fill="#d52424"
        transform={`translate(${w / 2} ,${h / 2 + mouthSize}),rotate(90)`}
      />
      <circle
        fill={"black"}
        stroke-width={10}
        r="20"
        cx={w / 2 + eyesOffset + eyesBallsDiagonal}
        cy={h / 2 - eyesBallsY - eyesBallsDiagonal}
      />
      <circle
        fill={"black"}
        stroke-width={10}
        r="20"
        cx={w / 2 - eyesOffset + eyesBallsDiagonal}
        cy={h / 2 - eyesBallsY - eyesBallsDiagonal}
      />
    </svg>
  );
}

export default Smile;
