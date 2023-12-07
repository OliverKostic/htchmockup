// src/components/PlantComponent.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FactoryIcon from "@mui/icons-material/Factory";
import "./PlantComponent.css";

const PlantComponent: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <div className="title-container">
          <FactoryIcon className="icon"></FactoryIcon>
          <Typography variant="h5" component="div" className="title">
            Menu
          </Typography>
        </div>
        123
      </CardContent>
    </Card>
  );
};

export default PlantComponent;
