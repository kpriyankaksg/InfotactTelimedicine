// PatientDashboard.js
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import ChildCareIcon from "@mui/icons-material/ChildCare";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import FemaleIcon from "@mui/icons-material/Female";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RestaurantIcon from "@mui/icons-material/Restaurant"; // gastro


const doctors = [
  { name: "Dr. Richard James", specialty: "General Physician", img: "https://media.istockphoto.com/id/1436529091/photo/smiling-doctor-holding-a-medical-chart.jpg?s=612x612&w=0&k=20&c=0rdvaRW7IVYKrmSUFRi17zGxGgah-7J_ttf1QuZ95d8=" },
  { name: "Dr. Emily Larson", specialty: "Gynecologist", img: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.88931xw:1xh;center,top&resize=1200:*" },
  { name: "Dr. Sarah Patel", specialty: "Dermatologist", img: "https://static.vecteezy.com/system/resources/thumbnails/072/670/062/small/happy-therapist-doctor-making-medical-record-posing-holding-clipboard-standing-over-blue-studio-background-smiling-to-camera-vertical-full-length-shot-of-arabic-male-physician-photo.jpg" },
  { name: "Dr. Christopher Lee", specialty: "Pediatrician", img: "https://t4.ftcdn.net/jpg/12/10/24/15/360_F_1210241577_0dn4ayO89QwXEwp3SxJS1SWW7pDBPhz0.jpg" },
  { name: "Dr. Sohel ", specialty: "Cardiologist", img: "https://static.vecteezy.com/system/resources/thumbnails/078/512/560/small/a-smiling-male-doctor-with-a-stethoscope-photo.jpg" },
  { name: "Dr. Renu Raina Lee", specialty: "Pediatrician", img: "https://safartibbi.com/wp-content/uploads/2023/02/dr.renu-raina.jpg" },
 
 
];

export default function PatientDashboard() {
  return (
     <Box sx={{ bgcolor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "#e3f2fd",
          py: 6,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "#00695c", mb: 2 }}
        >
          Welcome to HEALTH CARE
        </Typography>
        <Typography sx={{ mb: 3, color: "text.secondary" }}>
          Book appointments with trusted doctors and manage your health easily.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#f57c00",
            "&:hover": { bgcolor: "#ef6c00" },
            borderRadius: 2,
            px: 4,
            py: 1.5,
            fontSize: "1rem",
          }}
        >
          Book Appointment
        </Button>
     </Box> 
       {/* Find by Speciality */}
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 3, color: "#00695c" }}
        >
          Find by Speciality
        </Typography>
         <Typography sx={{ mb: 3, color: "text.secondary" }}>
        Simply browse through our extensive list of trusted doctors,
        schedule your appointment hassle-free.
      </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { icon: <MedicalServicesIcon fontSize="large" />, label: "General Physician" },
            { icon: <FemaleIcon fontSize="large" />, label: "Gynecologist" },
            { icon: <FaceRetouchingNaturalIcon fontSize="large" />, label: "Dermatologist" },
            { icon: <ChildCareIcon fontSize="large" />, label: "Pediatrician" },
            { icon: <PsychologyIcon fontSize="large" />, label: "Neurologist" },
            { icon: <RestaurantIcon fontSize="large" />, label: "Gastroenterologist" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 2,
                  boxShadow: 2,
                  borderRadius: 5,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                {item.icon}
                <CardContent>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {item.label}
                  </Typography>
                   </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>



    {/* <Box sx={{ p: 4, bgcolor: "#f9f9f9", minHeight: "100vh" }}> */} 
      {/* Heading */}
        {/* Section: Top Doctors */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", color: "#C21A09", mb: 4,py:4}}
      >
        Top Doctors to Book
      </Typography>
      <Grid container spacing={3}>
        {doctors.map((doc, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={doc.img}
                alt={doc.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {doc.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {doc.specialty}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "green", fontWeight: "bold" }}
                >
                  Available
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
                  Book Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}