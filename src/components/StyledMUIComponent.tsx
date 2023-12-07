import React from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)``;

const StyledTextField = styled(TextField)``;

const StyledMUIComponent: React.FC = () => {
  return (
    <div>
      <StyledButton variant="contained" color="primary">
        MUI Button
      </StyledButton>
      <StyledTextField label="MUI TextField" />
    </div>
  );
};

export default StyledMUIComponent;

export {};
