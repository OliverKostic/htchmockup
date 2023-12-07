import React from "react";
import "./RightPanelComponent.css";
import TransfersComponent from "./Transfers/TransfersComponent";
import SignalsComponent from "./Signals/SignalsComponent";
import PlantResponsibleComponent from "./PlantResponsible/PlantResponsibleComponent";
import UsersComponent from "./Users/UsersComponent";
import ShiftLogComponent from "./ShiftLog/ShiftLogComponent";

const RightPanelComponent: React.FC = () => {
  return (
    <div className="right-panel">
      <TransfersComponent />
      <SignalsComponent />
      <PlantResponsibleComponent />
      <ShiftLogComponent />
      <UsersComponent />
    </div>
  );
};

export default RightPanelComponent;
