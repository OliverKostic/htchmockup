import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import "./SignalsComponent.css";

const SignalsComponent: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <div className="title-container">
          <SignalCellularAltIcon className="icon"></SignalCellularAltIcon>
          <Typography variant="h5" component="div" className="title">
            Signals
          </Typography>
        </div>
        123
      </CardContent>
    </Card>
  );
};

export default SignalsComponent;
