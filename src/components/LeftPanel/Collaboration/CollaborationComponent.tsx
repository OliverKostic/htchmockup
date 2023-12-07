import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./CollaborationComponent.css";

const CollaborationComponent: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <div className="title-container">
          <HandshakeIcon className="icon"></HandshakeIcon>
          <Typography variant="h5" component="div" className="title">
            Collaboration
          </Typography>
        </div>
        <div className="column-container">
          <div className="link-column">
            <div>
              <ShowChartIcon></ShowChartIcon>
              <a href="#">Standard Plots</a>
            </div>
            <div>
              <BarChartIcon></BarChartIcon>
              <a href="#">User Plots</a>
            </div>
            <div>
              <NotificationsIcon></NotificationsIcon>
              <a href="#">User Alerts</a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollaborationComponent;
