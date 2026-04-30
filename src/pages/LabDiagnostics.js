
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const plans = [
  {
    title: "Diabetic Health Checkup",
    description:
      "Get the comprehensive Diabetic Health Checkup plan and maintain your overall health with early detection of complications.",
    price: "₹1999 /-",
  },
  {
    title: "General Health Checkup",
    description:
      "A step towards lifelong health with full body checkup to detect and prevent the potential issues in advance.",
    price: "₹2699 /-",
  },
  {
    title: "Cardiac Profile",
    description:
      "Ensuring a healthy heart with thorough evaluation and screening with our complete Cardiac Profile for risk elimination.",
    price: "₹6499 /-",
  },
  {
    title: "Executive Health Checkup (Female)",
    description:
      "Promoting healthy life and wellness to all the women with our extensive health checkup plan curated especially for females.",
    price: "₹6999 /-",
  },
   {
    title: "Executive Health Checkup (Male)",
    description:
      "Get the advanced health screening for effectively managing the health at all stages with preventive tips and personalised solutions for men.",
    price: "₹6999 /-",
  },
  {
    title: "Master Health Checkup",
    description:
      "Detailed health checkup with diagnostic tests to get complete image of the underlying issues from minor to complex issues.",
    price: "₹4599 /-",
  },
  {
    title: "Wholebody Health Checkup",
    description:
      "Whole Body Checkup is specially planned to detect, diagnose and monitor the entire body ensuring to cover major parameters.",
    price: "₹8999 /-",
  },
  {
    title: "Renal (Kidney) Health Checkup",
    description:
      "Detect the signs of risk and get the preventive tips for maintaining the health and proper functioning of kidneys with Renal health checkup.",
    price: "₹2999 /-",
  },

];

export default function LabDiagnostics() {
  return (
    <Box sx={{ p: 4, bgcolor: "#E3FCF9" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#00695c" }}
      >
       Lab & Diagnostics
      </Typography>
      <Typography variant="h6" align="center"  gutterBottom
        sx={{ fontWeight: "bold", color: "#00695c" }}>
        All Packages
      </Typography>

      {/* <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: 3,
                borderRadius: 2,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#004d40" }}
                >
                  {plan.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  {plan.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "#d32f2f" }}
                >
                  {plan.price}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#00695c",
                    "&:hover": { bgcolor: "#004d40" },
                    borderRadius: 2,
                  }}
                >
                  Read more
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid> */}
       <Grid container spacing={2}
        sx={{bgcolor: "#E3FCF9",py:5}} 
      >
   
  {plans.map((plan, index) => (
     <Grid item xs={4}  sx={{ minHeight: 180, width:350}}>
      <Card
        sx={{
          height: "100%",          // ensures equal height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: 3,
          borderRadius: 2,
          transition: "transform 0.3s",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "teal" }}
          >
            {plan.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mb: 2 }}
          >
            {plan.description}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#d32f2f" }}
          >
            {plan.price}
          </Typography>
        </CardContent>

        <Box sx={{ p: 2, textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#00695c",
              "&:hover": { bgcolor: "#004d40" },
              borderRadius: 2,
            }}
          >
            READ MORE
          </Button>
        </Box>
      </Card>
    </Grid>
  ))}
</Grid>
    </Box>
  );
}