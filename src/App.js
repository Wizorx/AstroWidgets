import * as React from "react";
import { Mafs, Transform, LaTeX,Line, Coordinates, useMovablePoint, Plot,Theme } from "mafs";
import { round } from "lodash"
import "./App.css";
import "katex/dist/katex.min.css";

export default function App() {
  const viewBox = { x: [-2, 2], y: [-4, 4] };
  const point1 = useMovablePoint([1,0], {
    color: Theme.violet,
  });
  const r = Math.sqrt(point1.point[0] ** 2 + point1.point[1] ** 2);
  let angle = Math.atan2(point1.point[1], point1.point[0]);
  const my_blue = "#6495ED";
  const my_black = Theme.violet
  // Adjust angle to always be positive, between 0 to 2π
  if (angle < 0) {
    angle += 2 * Math.PI;
  }
  return (
    <div className="mafs-container">
      <div className="mafs-item">
        <Mafs viewBox={viewBox} pan={false} height = {330}>
          <Coordinates.Cartesian />
          <Line.Segment
            point1={[0, 0]}
            point2={[point1.point[0], 0]}
            color={my_black}
          />
          <Line.Segment
            point1={[point1.point[0], 0]}
            point2={point1.point}
            color={my_black}
          />

          {point1.element}
        </Mafs>
      </div>
      <div className="mafs-item">
        <Mafs viewBox={viewBox} pan={false} height = {330}>
          <Coordinates.Polar subdivisions={1} lines={1} 
        yAxis={{ labels: false }}/>
          <Line.Segment point1={[0, 0]} point2={[r, 0]} color={my_black} />
          <Plot.Parametric
            t={[0, angle]}
            xy={(t) => [r * Math.cos(t), r * Math.sin(t)]}
            color={my_black}
          />
          <Transform translate={[1.2, 0]}>
            <LaTeX
              at={point1.point}
              tex={String.raw`${round(angle/Math.PI,2)}\pi`}
            />
          </Transform>
          {point1.element}
        </Mafs>
      </div>
    </div>
  );
}