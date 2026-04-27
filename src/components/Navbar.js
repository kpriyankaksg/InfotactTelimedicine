import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo + Title */}
        <Box display="flex" alignItems="center">
          <img src="https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Free-Global-Health-Care-PSD-Logo-Template-PNG-Transparent.png" alt="healthCare Logo" style={{ height: 120, marginLeft: 60 }} />
          {/* <Typography variant="h6" color="primary">
            Health Care
          </Typography> */}
        </Box>

        {/* Navigation Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About Us</Button>
          <Button component={Link} to="/departments" color="inherit">Department</Button>
          <Button component={Link} to="/labs" color="inherit">Lab & Diagnostic</Button>
          <Button component={Link} to="/contact" color="inherit">Contact Us</Button>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            color="warning"
            component={Link}
            to="/appointment"
          >
            Book Appointment
          </Button>

          {/* Login Dropdown */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Login
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/login-admin" onClick={handleClose}>
              Admin Login
            </MenuItem>
            <MenuItem component={Link} to="/login-doctor" onClick={handleClose}>
              Doctor Login
            </MenuItem>
            <MenuItem component={Link} to="/login-patient" onClick={handleClose}>
              Patient Login
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}