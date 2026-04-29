import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Link,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("Patient");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    console.log("Register:", { role, name, email, password, confirmPassword });
    // Add your registration logic here
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f0f4f7",
        //display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px:"32%",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          maxWidth: 450,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 3, color: "teal" }}
        >
          Registration
        </Typography>

        {/* Role Selection */}
        <TextField
          select
          label="Register As"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        >
          <MenuItem value="Patient">Patient</MenuItem>
          <MenuItem value="Doctor">Doctor</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
        </TextField>

        {/* Name */}
        <TextField
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

        {/* Confirm Password */}
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />

        {/* Register Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 2 }}
          onClick={handleRegister}
        >
          Register
        </Button>

        {/* Back to Login */}
        <Typography variant="body2">
          Already have an account?{" "}
          <Link href="/patientLogin" underline="hover" sx={{ color: "teal" }}>
            Login here
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;