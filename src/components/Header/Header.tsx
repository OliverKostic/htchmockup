import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalculateIcon from "@mui/icons-material/Calculate";
import WifiIcon from "@mui/icons-material/Wifi";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography variant="h6">Hitachi Zosen Inova</Typography>
        <div className="dropdowns">
          <Select value="" displayEmpty className="dropdown">
            <MenuItem value="" disabled>
              Quick Links
            </MenuItem>
            <MenuItem value="link1">
              <AddIcon></AddIcon>Add Plot
            </MenuItem>
            <MenuItem value="link2">
              <ContentCopyIcon></ContentCopyIcon>Copy Plot
            </MenuItem>
            <MenuItem value="link3">
              <NotificationsIcon></NotificationsIcon>Add Alert
            </MenuItem>
            <MenuItem value="link4">
              <CalculateIcon></CalculateIcon>Add Calculation
            </MenuItem>
            <Divider variant="fullWidth" component="li" />
            <MenuItem value="link5">
              <WifiIcon></WifiIcon>Signals
            </MenuItem>
            <MenuItem value="link6">
              <LibraryBooksIcon></LibraryBooksIcon>Shift-Log
            </MenuItem>
            <MenuItem value="link7">
              <ShowChartIcon></ShowChartIcon>Standard Plots
            </MenuItem>
            <MenuItem value="link8">
              <BarChartIcon></BarChartIcon>User Plots
            </MenuItem>
            <MenuItem value="link9">
              <NotificationsIcon></NotificationsIcon>User Alerts
            </MenuItem>
          </Select>
          <Select value="" displayEmpty className="dropdown">
            <MenuItem value="" disabled>
              Oliver Kostic
            </MenuItem>
            <MenuItem value="1">
              <VpnKeyIcon></VpnKeyIcon>User Plots
            </MenuItem>
            <MenuItem value="2">
              <LogoutIcon></LogoutIcon>User Alerts
            </MenuItem>
          </Select>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
