
// DoctorProfile.js
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

export default function DoctorProfile({ doctor }) {
  // Example doctor data (replace with backend fetch via ID/params)
  const doc = doctor || {
    name: "Dr. Richard James",
    specialty: "MBBS - General Physician",
    experience: "4 years",
    about:
      "Dr. Richard James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: "$50",
    img: "/images/doc1.jpg",
    slots: [
      "05:00 pm",
      "06:00 pm",
      "06:30 pm",
      "07:00 pm",
      "07:30 pm",
      "08:00 pm",
      "08:30 pm",
    ],
    days: ["Wed 4", "Thu 5", "Fri 6", "Sat 7", "Sun 8", "Mon 9", "Tue 10"],
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f9f9f9", minHeight: "100vh" }}>
      <Grid container spacing={4}>
        {/* Left side: Doctor photo */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="300"
              image={doc.img}
              alt={doc.name}
            />
          </Card>
        </Grid>

        {/* Right side: Doctor details */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            {doc.name}
          </Typography>
          <Typography variant="h6" sx={{ color: "#00695c", mb: 1 }}>
            {doc.specialty}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Experience: {doc.experience}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            About
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
            {doc.about}
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
            Appointment Fee: {doc.fee}
          </Typography>

          {/* Booking slots */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Booking Slots
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 1 }}>Days:</Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {doc.days.map((day, i) => (
                <Button key={i} variant="outlined" sx={{ borderRadius: 2 }}>
                  {day}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 1 }}>Times:</Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {doc.slots.map((time, i) => (
                <Button key={i} variant="outlined" sx={{ borderRadius: 2 }}>
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
            }}
          >
            Book an Appointment
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}