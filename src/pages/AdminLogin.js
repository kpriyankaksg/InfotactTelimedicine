import {
  Box,
  Button,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";




const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const { login } = useContext(AuthContext);

 const handleLogin = async () => {
  try{
  const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
     const result = response.data;
      console.log(result);
      if (result.token) {
       login(result.token);   // ✅ update context + localStorage
       alert("Login Successfully.");
          navigate("/adminDashboard"); 
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert("Invalid Credentials.");
      console.error(error.response?.data || error.message);
    }
  }

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
    </Box>
  );
}


export default AdminLogin;