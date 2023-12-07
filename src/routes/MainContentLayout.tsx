import React from "react";
import LeftPanelComponent from "../components/LeftPanel/LeftPanelComponent";
import RightPanelComponent from "../components/RightPanel/RightPanelComponent";
import { Outlet } from "react-router-dom";
import MainContentRoutes from "./MainContentRoutes";
import ChartComponent from "../components/Chart/ChartComponent";

const MainContentLayout: React.FC = () => {
  return (
    <div className="main-content">
      <LeftPanelComponent />
      <Outlet />
      <ChartComponent></ChartComponent>
      <RightPanelComponent />
    </div>
  );
};

export default MainContentLayout;
