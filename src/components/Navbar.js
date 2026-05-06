import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppBar, Box, Button, Grid, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";






export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [deptAnchorEl, setDeptAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleDeptHover = (event) => {
    setDeptAnchorEl(event.currentTarget);
  };

  const handleDeptClose = () => {
    setDeptAnchorEl(null);
  };
      //   const handleLogout = () => {
      //   localStorage.removeItem("token");   // clear token
      //   setIsLoggedIn(false);               // update state
      //   navigate("/");                      // redirect to home
      // };

      // useEffect(() => {
      //   const token = localStorage.getItem("token");
      //   setIsLoggedIn(!!token);
      // }, []);




  return (
    <AppBar position="static" color="default" elevation={2} >
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
          <Button component={Link} to="/aboutUs" color="inherit">About Us</Button>
          {/* <Button component={Link} to="/departments" color="inherit">Department</Button> */}
           {/* Departments Dropdown */}
          <Button endIcon={<KeyboardArrowDownIcon />}
            color="inherit"
             onMouseEnter={handleDeptHover}
            // onMouseLeave={handleDeptClose}
              // onClick={handleDeptHover}
          >
            Department 
          </Button>
          <Menu
            anchorEl={deptAnchorEl}
            open={Boolean(deptAnchorEl)}
           onClose={handleDeptClose}
            MenuListProps={{ onMouseLeave: handleDeptClose }}
              PaperProps={{
                          sx: {
                            p: 2,
                            borderRadius: "12px !important",        // rounded corners
                            boxShadow: 4,           // optional shadow for depth
                            overflow: "hidden", 
                          },
                        }}
          >
             <Grid container spacing={4} sx={{p:4 }}>
              {/* Medical Department Column */}
              <Grid item xs={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1, color:'teal' }}>
                  Medical Department
                </Typography>
                <MenuItem component={Link} to="/general-medicine" onClick={handleDeptClose}>General Medicine</MenuItem>
                <MenuItem component={Link} to="/pediatrics" onClick={handleDeptClose}>Pediatrics</MenuItem>
                <MenuItem component={Link} to="/dermatology" onClick={handleDeptClose}>Dermatology</MenuItem>
                <MenuItem component={Link} to="/neurology" onClick={handleDeptClose}>Neurology</MenuItem>
                <MenuItem component={Link} to="/cardiology" onClick={handleDeptClose}>Cardiology</MenuItem>
              </Grid>
                <Grid item xs={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1,color:'teal' }}>
                  Surgical Department
                </Typography>
                <MenuItem component={Link} to="/general-surgery" onClick={handleDeptClose}>General Surgery</MenuItem>
                <MenuItem component={Link} to="/orthopedics" onClick={handleDeptClose}>Orthopedics</MenuItem>
                <MenuItem component={Link} to="/ent" onClick={handleDeptClose}>ENT</MenuItem>
                <MenuItem component={Link} to="/urology" onClick={handleDeptClose}>Urology</MenuItem>
                <MenuItem component={Link} to="/plastic-surgery" onClick={handleDeptClose}>Plastic Surgery</MenuItem>
              </Grid>
            </Grid>
            </Menu>

          <Button component={Link} to="/labDiagnostics" color="inherit">Lab & Diagnostic</Button>
          <Button component={Link} to="/contactUs" color="inherit">Contact Us</Button>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button onClick={() => setOpen(true)}
            variant="contained"
            color="warning"
            component={Link}
            to="/appointmentDialog"
          >
            Book Appointment
          </Button>

          {/* Login Dropdown */}
          {isLoggedIn ? (
              <Button
                variant="contained"
                color="primary"
                onClick={logout}
              >
                Logout
              </Button>
            ) : (
              <>
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
                  <MenuItem component={Link} to="/patientLogin" onClick={handleClose}>
                    Patient Login
                  </MenuItem>
                  <MenuItem component={Link} to="/doctorLogin" onClick={handleClose}>
                    Doctor Login
                  </MenuItem>
                  <MenuItem component={Link} to="/adminLogin" onClick={handleClose}>
                    Admin Login
                  </MenuItem>
                </Menu>
              </>
            )}
        
        </Box>
      </Toolbar>
    </AppBar>
  );
}