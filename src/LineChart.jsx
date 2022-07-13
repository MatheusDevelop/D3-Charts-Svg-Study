import { curveCardinal, line, scaleLinear, select } from "d3";
import React, { useEffect, useRef, useState } from "react";

function LineChart() {
  const widthOfSvg = 500;
  const heightOfSvg = 300;
  const svgReference = useRef();
  const [data, setData] = useState([0, 5, 0, 10, 0, 5,6]);

  const xScale = scaleLinear()
    .domain([0, data.length - 1])
    .range([10, widthOfSvg - 10]);
  // domain in x is on graph props ex : x = 0 to 6
  //range in x is the size inside svg

  const yScale = scaleLinear()
    .domain([11, 0])
    .range([0, heightOfSvg - 20]);
  //domain in y start on top and end on bottom
  //range in y is the size inside svg

  useEffect(() => {
    const svgElementAtDom = select(svgReference.current);
    const lineFunctionThatRenderStringForPathDAttribute = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    svgElementAtDom
      .selectAll("path")
      .data([data]) //<-- Data Method
      .join("path")
      .attr("d", (valueMapOfThisDataMethod) =>
        lineFunctionThatRenderStringForPathDAttribute(valueMapOfThisDataMethod)
      )
      .attr("fill", "none")
      .attr("stroke", "#414141")
      .attr("stroke-width", "2");

    svgElementAtDom
      .selectAll("circle")
      .data(data) //<-- Data Method without []
      .join("circle")
      .attr("cx", (value, index) => xScale(index))
      .attr("cy", (value) => yScale(value))
      .attr("r", 4)
      .attr("stroke", "#414141")
      .attr("stroke-width", "2")
      .style("fill", "#e3e1e1");
  }, []);
  return (
    <svg
      ref={svgReference}
      width={widthOfSvg}
      height={heightOfSvg}
    ></svg>
  );
}

export default LineChart;
