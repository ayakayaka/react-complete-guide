import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.labels}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.data}
        />
      ))}
    </div>
  );
};

export default Chart;
