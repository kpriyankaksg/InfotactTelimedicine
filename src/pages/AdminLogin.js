import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { useState } from "react";

const AdminLogin = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Admin Login with:", adminId, password);
    // Add your admin login logic here
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f0f4f7",
         alignItems: "center",     // Centers horizontally
          justifyContent: "center",
          px:"35%",
          py:5
            }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 3, color: "teal" }}
        >
          Admin Login
        </Typography>

        {/* Admin ID */}
        <TextField
          label="Admin ID / Username"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
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
    </Box>
  );
};

export default AdminLogin;