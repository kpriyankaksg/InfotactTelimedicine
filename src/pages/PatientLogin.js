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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PatientLogin=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Login with:", email, password);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f0f4f7", 
      //display: "flex",      // Enables flexbox
    //flexDirection: "column",   // Optional: stacks children vertically
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
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
              Patient Services
            </Typography>
            <List>
              <ListItem>
                <CheckCircleIcon color="white" />
                <ListItemText primary="Book Video Consultation" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon color="white" />
                <ListItemText primary="Book Doctor Appointment" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon color="white" />
                <ListItemText primary="View Medical Records" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon color="white" />
                <ListItemText primary="Add Family Members" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon color="white" />
                <ListItemText primary="And much more..." />
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
              Patient Login
            </Typography>

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
              <Link href="/register" underline="hover" sx={{ color: "teal" }}>
                Register here
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
export default PatientLogin;