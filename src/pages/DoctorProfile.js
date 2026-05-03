// DoctorProfile.js
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import { useLocation } from "react-router-dom";

export default function DoctorProfile() {
  const { state } = useLocation();
  const doctor = state?.doctor;

  // Generate next 7 days dynamically
  const generateUpcomingDays = (count = 7) => {
    const days = [];
    for (let i = 0; i < count; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const weekday = date.toLocaleDateString("en-US", { weekday: "short" }); // e.g., Mon
      const dayNum = date.getDate(); // e.g., 4
      days.push(`${weekday} ${dayNum}`);
    }
    return days;
  };

  const upcomingDays = generateUpcomingDays();

  const slots = [
    "05:00 pm",
    "06:00 pm",
    "06:30 pm",
    "07:00 pm",
    "07:30 pm",
    "08:00 pm",
    "08:30 pm",
  ];

  return (
    <Box sx={{ p: 4, bgcolor: "#f9f9f9", minHeight: "100vh" }}>
      <Grid container spacing={4} >
        {/* Left side: Doctor photo */}
       
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="250"
              image={doctor?.img}
              alt={doctor?.name}
            />
          </Card>
        </Grid>

        {/* Right side: Doctor details */}
        <Grid item xs={12} md={8} >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            {doctor?.name}
          </Typography>
          <Typography variant="h6" sx={{ color: "#00695c", mb: 1 }}>
            {doctor?.specialty}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Experience: {doctor?.experience}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            About
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
            {doctor?.about}
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
            Appointment Fee: {doctor?.fee}
          </Typography>
        
         
          {/* Booking slots */}
          
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1,color: "red" }}>
            Booking Slots
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 1 }}>Days:</Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {upcomingDays.map((day, i) => (
                <Button
                  key={i}
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    fontWeight: "bold",
                    color: "#1976d2",
                    borderColor: "#1976d2",
                  }}
                >
                  {day}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 1 }}>Times:</Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {slots.map((time, i) => (
                <Button
                  key={i}
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    fontWeight: "bold",
                    color: "#1976d2",
                    borderColor: "#1976d2",
                  }}
                >
                  {time}
                </Button>
              ))}
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#1976d2",
              "&:hover": { bgcolor: "#1565c0" },
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontWeight: "bold",
            }}
          >
            Book an Appointment
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}