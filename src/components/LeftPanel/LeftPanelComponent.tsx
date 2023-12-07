import React from "react";
import "./LeftPanelComponent.css";
import CollaborationComponent from "./Collaboration/CollaborationComponent";
import PlantComponent from "./Plant/PlantComponent";
import MenuComponent from "./Menu/MenuComponent";

const LeftPanelComponent: React.FC = () => {
  return (
    <div className="left-panel">
      <PlantComponent />
      <MenuComponent />
      <CollaborationComponent />
    </div>
  );
};

export default LeftPanelComponent;
