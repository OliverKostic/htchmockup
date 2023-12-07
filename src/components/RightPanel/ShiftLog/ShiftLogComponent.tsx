import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import "./ShiftLogComponent.css";

const ShiftLogComponent: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <div className="title-container">
          <LibraryBooksIcon className="icon"></LibraryBooksIcon>
          <Typography variant="h5" component="div" className="title">
            Shift Log
          </Typography>
        </div>
        123
      </CardContent>
    </Card>
  );
};

export default ShiftLogComponent;
