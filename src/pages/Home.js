import LungsIcon from "@mui/icons-material/AccessibilityNew"; // placeholder for pulmonology
import ChildCareIcon from "@mui/icons-material/ChildCare"; // pediatrics
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"; // example icon
import { Box, Grid, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite"; // cardiology
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural"; // dermatology
import Slider from "react-slick";




export default function Home() {
  const services = [
  {
    title: "General Medicine",
    description:
      "For your overall well-being and wellness we have a team of experts that care and treat common illnesses with comprehensive care.",
    icon: <LocalHospitalIcon sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    title: "Pulmonology",
    description:
      "Skilled and expert pulmonologists who are offering advanced treatments for your lung health, breathing, and respiratory wellness.",
    icon: <LungsIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
  },
  {
    title: "Pediatrics",
    description:
      "Trust the expert care and ensure your child’s growth, development, overall health and well-being from infants to toddlers.",
    icon: <ChildCareIcon sx={{ fontSize: 40, color: "warning.main" }} />,
  },
  {
    title: "Cardiology",
    description:
      "Experience personalized heart care, advanced treatments, and solutions for optimal cardiovascular health with our expert cardiologist.",
    icon: <FavoriteIcon sx={{ fontSize: 40, color: "error.main" }} />, // heart icon
  },
  {
    title: "Dermatology",
    description:
      "Achieve healthy and clear skin through effective treatments and expert dermatologist’s advice that boost your confidence.",
    icon: <FaceRetouchingNaturalIcon sx={{ fontSize: 40, color: "purple" }} />, // skin/face icon
  },
];
const settings = {
    dots: true,
    infinite: true,       // never-ending loop
    speed: 500,
    slidesToShow: 3,      // 3 cards visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box>
      {/* Scrollable Banner */}
      <Box
        sx={{
          bgcolor: "teal",
          color: "white",
          overflow: "hidden",
          whiteSpace: "nowrap",
          py: 1,
        }}
      >
        <Typography
          component="span"
          sx={{
            display: "inline-block",
            px: 2,
            animation: "scrollText 15s linear infinite",
          }}
        >
          Explore our latest updates and important announcements here.
        </Typography>

        <style>
          {`
            @keyframes scrollText {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </Box>

      {/* Hero Section */}
      <Grid container spacing={2}
        sx={{bgcolor: "#E3FCF9"}}
        
      >
        {/* Text Column (Left) */}
        <Grid item xs={3}  sx={{ minHeight: 400, width:800, px:20 }}>
          <Typography variant="h2" color="primary" gutterBottom
          sx={{py:5}}  >
            We at Health Care are there for you ALWAYS and in ALL WAYS.
          </Typography>
          {/* <h1 sx={{color: 'blue'}}> We at Health Care are there for you ALWAYS and in ALL WAYS</h1> */}
          <Typography variant="body1" color="textSecondary">
            We have the best multispecialty hospitals with experienced doctors in all over India with
            cutting-edge technologies to ensure the safety of our patients
            with optimal care and trust.
          </Typography>
          
        </Grid>

        {/* Image Column (Right) */}
        <Grid item xs={9}  >
          <Box
            sx={{
              background: "linear-gradient(135deg, #e0f7fa, #fce4ec)",
              p: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center",
            }}
          >
            <Paper elevation={3} sx={{ width: "100%" }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Doctor"
                style={{ height:250, borderRadius: 8 }}
              />
            </Paper>
            <Paper elevation={3} sx={{ width: "100%" }}>
              <img
                src="https://d2lnbwhcsmj8tp.cloudfront.net/ianslive_watermark/202510123538615.jpg"
                alt="Medicines"
                style={{height:250, borderRadius: 8 }}
              />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    {/* </Box> */}

    
    <Box sx={{ py: 6, bgcolor: "#f9f9f9" }}>
  <Typography
    variant="h4"
    align="center"
    sx={{ fontWeight: "bold", mb: 4, color: "teal" }}
  >
    Health Care for all your Health Issues
  </Typography>

  {/* <Grid container spacing={2} justifyContent="center"> */}
   <Slider {...settings}>
    {services.map((service, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            textAlign: "center",
            borderRadius: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#FCFBF4",
            color: "teal"
            // width: "80%"
          }}
        >
          {service.icon}
          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
            {service.title}
          </Typography>
            <Typography
            variant="body2"
            sx={{
            color: "black",
            mt: 1,
            // --- FIX FOR FIXED WIDTH & VISIBILITY ---
            width: "100%", // Take full width of parent Paper
            maxWidth: "280px", // Increased max width slightly for better fit
            
            // To make text fully visible (no ellipsis) but still restricted:
            overflow: "hidden", 
            textOverflow: "clip", // Do not use "ellipsis" if you want to see all text
            whiteSpace: "normal", // IMPORTANT: Allows text to wrap instead of 1 line
            
            // Optional: Limit to a specific number of lines (e.g., 3 lines)
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
          }}
          >
            {service.description}
          </Typography>
        </Paper>
      </Grid>
    ))}
  {/* </Grid> */}
    </Slider>

</Box>

     </Box>

  );
}