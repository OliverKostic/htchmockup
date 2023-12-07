import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import "./ChartComponent.css";
import OperationPointsComponent from "./OperationPoints/OperationPointsComponent";

const ChartComponent: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="chart-container">
      <div className="tabs-container">
        <Tabs value={value} onChange={handleChange} aria-label="chart tabs">
          <Tab label="Chart 1" />
          <Tab label="Chart 2" />
        </Tabs>
      </div>
      <div className="chart-container canvas">
        {value === 0 && <Chart1 />} {value === 1 && <Chart2 />}
        <OperationPointsComponent />
      </div>
    </div>
  );
};

export default ChartComponent;
