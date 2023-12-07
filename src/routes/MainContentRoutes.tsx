// MainContentRoutes.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import ChartComponent from "../components/Chart/ChartComponent";
import PlotSettingsComponent from "../components/LeftPanel/Menu/PlotSettings/PlotSettingsComponent";
const MainContentRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ChartComponent />} />
      <Route path="/chart" element={<ChartComponent />} />
      <Route path="/plot-settings" element={<PlotSettingsComponent />} />
    </Routes>
  );
};

export default MainContentRoutes;
