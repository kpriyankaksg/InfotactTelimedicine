import { Box, Grid, Paper, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function Home() {
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
          sx={{py:5}}
          >
            We at Health Care are there for you ALWAYS and in ALL WAYS
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
    </Box>
  );
}