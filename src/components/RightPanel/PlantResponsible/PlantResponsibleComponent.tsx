import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import "./PlantResponsibleComponent.css";

const PlantResponsibleComponent: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <div className="title-container">
          <PersonAddIcon className="icon"></PersonAddIcon>
          <Typography variant="h5" component="div" className="title">
            Plant Responsible
          </Typography>
        </div>
        123
      </CardContent>
    </Card>
  );
};

export default PlantResponsibleComponent;
