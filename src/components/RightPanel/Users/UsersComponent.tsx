import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GroupsIcon from "@mui/icons-material/Groups";
import "./UsersComponent.css";

const UsersComponent: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <div className="title-container">
          <GroupsIcon className="icon"></GroupsIcon>
          <Typography variant="h5" component="div" className="title">
            Users
          </Typography>
        </div>
        123
      </CardContent>
    </Card>
  );
};

export default UsersComponent;
