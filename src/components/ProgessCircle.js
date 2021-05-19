import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Circle = styled.circle`
  stroke-width: 3;
  fill: none;
  margin: 20px;
`;

const CircleDotsCont = styled.div``;

const ProgressCircle = (props) => {
  const [offset, setOffset] = useState(0);
  const { size, progress, strokeWidth, circleOneStroke, circleTwoStroke } =
    props;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, progress, circumference, offset]);
  return (
    <CircleDotsCont>
      <svg class="circular-Dot" width={size} height={size}>
        <Circle
          class="circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
        ></Circle>
        <Circle>
          class="circle" stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth= {strokeWidth}
          strongDasharray={circumference}
          strokeDaskoffset = {offset}
        </Circle>
      </svg>
    </CircleDotsCont>
  );
};
export default ProgressCircle;
