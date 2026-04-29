import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const DoctorLogin = () => {
  const [doctorId, setDoctorId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Doctor Login with:", doctorId, email, password);
    // Add your doctor login logic here
  };

  return (
 
    // <Box
    //   sx={{
    //     minHeight: "100vh",
    //     bgcolor: "#f0f4f7",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     p: 2,
    //   }}
    // >
    //   <Paper
    //     elevation={4}
    //     sx={{
    //       p: 4,
    //       borderRadius: 3,
    //       maxWidth: 400,
    //       width: "100%",
    //       textAlign: "center",
    //     }}
    //   >
       
    // </Box>
      <Box sx={{ minHeight: "100vh", bgcolor: "#f0f4f7", 
                  alignItems: "center",     // Centers horizontally
                  justifyContent: "center",
                  px:"20%",
                  py:5
               }} >
      <Grid container alignItems="stretch" >
        {/* Left Side - Services */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              bgcolor: "teal",
              color: "white",
              p: 4,
              height: "100%",
            }}
          >
               {/* <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                Doctor Services
              </Typography> */}
              <List>
                <ListItem>
                  <CheckCircleIcon sx={{ color: "white" }} />
                  <ListItemText primary="Manage Appointments" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ color: "white" }} />
                  <ListItemText primary="Conduct Video Consultations" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ color: "white" }} />
                  <ListItemText primary="Access Patient Records" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ color: "white" }} />
                  <ListItemText primary="Upload Prescriptions" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ color: "white" }} />
                  <ListItemText primary="Track Clinical Notes" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ color: "white" }} />
                  <ListItemText primary="Monitor Patient Progress" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ color: "white" }} />
                  <ListItemText primary="Collaborate with Specialists" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ color: "white" }} />
                  <ListItemText primary="Analytics Dashboard" />
                </ListItem>
              </List>
          </Box>
        </Grid>

        {/* Right Side - Login Form */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              maxWidth: 400,
              margin: "auto",
              textAlign: "center",
               height: "100%",
            }}
          >
            <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 3, color: "teal" }}
        >
          Doctor Login
        </Typography>

        {/* Doctor ID */}
        <TextField
          label="Doctor ID / Registration Number"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />

        {/* Email */}
        <TextField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />

        {/* Password */}
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />

        {/* Login Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>

        {/* Register Link */}
        <Typography variant="body2">
          Don’t have an account yet?{" "}
          <Link href="/doctor-register" underline="hover" sx={{ color: "teal" }}>
            Register here
          </Link>
        </Typography>
      </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorLogin;