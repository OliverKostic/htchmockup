// src/components/MenuComponent.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import CalculateIcon from "@mui/icons-material/Calculate";
import "./MenuComponent.css";

const MenuComponent: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <div className="title-container">
          <MenuIcon className="icon"></MenuIcon>
          <Typography variant="h5" component="div" className="title">
            Menu
          </Typography>
        </div>
        <div className="button-container">
          <Tooltip title="Add Plot" placement="top" arrow>
            <Link to="/plot-settings" style={{ textDecoration: "none" }}>
              <Button variant="contained" className="green-button">
                <AddIcon></AddIcon>
              </Button>
            </Link>
          </Tooltip>
          <Tooltip title="Copy Plot" placement="top" arrow>
            <Button variant="contained" className="blue-button">
              <ContentCopyIcon></ContentCopyIcon>
            </Button>
          </Tooltip>
          <Tooltip title="Add Alert" placement="top" arrow>
            <Button variant="contained" className="green-button">
              <NotificationsIcon></NotificationsIcon>
            </Button>
          </Tooltip>
          <Tooltip title="Add Calculation" placement="top" arrow>
            <Button variant="contained" className="green-button">
              <CalculateIcon></CalculateIcon>
            </Button>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuComponent;
