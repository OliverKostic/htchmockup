import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./OperationPointsComponent.css";

const OperationPoints: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="operation-points">
      <Button variant="contained" onClick={() => handleButtonClick()}>
        Operation Points
      </Button>
      <div className={`drawer-container ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-paper">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Header 1</TableCell>
                  <TableCell>Header 2</TableCell>
                  <TableCell>Header 3</TableCell>
                  <TableCell>Header 4</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Cell 1</TableCell>
                  <TableCell>Cell 2</TableCell>
                  <TableCell>Cell 3</TableCell>
                  <TableCell>Cell 4</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Cell 1</TableCell>
                  <TableCell>Cell 2</TableCell>
                  <TableCell>Cell 3</TableCell>
                  <TableCell>Cell 4</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Cell 1</TableCell>
                  <TableCell>Cell 2</TableCell>
                  <TableCell>Cell 3</TableCell>
                  <TableCell>Cell 4</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default OperationPoints;
