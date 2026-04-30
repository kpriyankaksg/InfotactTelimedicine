import { Box, Grid, Paper, Typography } from "@mui/material";

const AboutUs=()=>{
  return(
    
    <Box>
      {/* Hero Section */}
      <Grid container spacing={2}
        sx={{bgcolor: "#E3FCF9"}} 
      >
        {/* Image Column (Right) */}
        <Grid item xs={9}  >
          <Box
            sx={{
              // background: "linear-gradient(135deg, #e0f7fa, #fce4ec)",
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
                src="https://etimg.etb2bimg.com/photo/100166038.cms"
                alt="healthCare"
                style={{ height:400, borderRadius: 8 }}
              />
            </Paper>
          </Box>
        </Grid>

        {/* Text Column (Left) */}
        <Grid item xs={3}  sx={{ minHeight: 400, width:800, px:20 }}>
          <Typography variant="h3" color="primary" gutterBottom
          sx={{py:3}}
          >
           The Vision That Led Foundation of HEATH CARE Is
          </Typography>
          {/* <h1 sx={{color: 'blue'}}> We at Health Care are there for you ALWAYS and in ALL WAYS</h1> */}
          <Typography variant="body1" color="textSecondary">
            The vision to make healthcare facilities available to everyone irrespective of financial status sparked the idea to lead a foundation for HEALTH CARE. Equipped with advanced technologies, driven with compassionate care for the wellness of the society to shape a healthier future.
          </Typography>
          
        </Grid>
      </Grid>

       {/* second one */}
        <Grid container spacing={2}
        sx={{bgcolor: "#E3FCF9"}} 
      >
        {/* Text Column (Left) */}
         <Grid item xs={3}  sx={{ minHeight: 400, width: "90%",px:30}}>
          <Typography variant="h3" color="primary" gutterBottom
          sx={{py:5}}
          >
           Our Principles Pillars That Define Us
          </Typography>
          {/* <h1 sx={{color: 'blue'}}> We at Health Care are there for you ALWAYS and in ALL WAYS</h1> */}
          <Typography variant="body1" color="textSecondary">
            We at HEALTH CARE are dedicated to providing premium healthcare followed by compassionate care and top-notch medical services for our patient’s wellness.
          </Typography>
          
        </Grid>

        {/* Image Column (Right) */}
        <Grid item xs={12}  >
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center",
            }}
          >
            {/* <Paper elevation={3} sx={{ width: "100%" }}>
              <img
                src="https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg"
                alt="healthCare1"
                style={{ height:400, borderRadius: 8 }}
              />
            </Paper> */}
          </Box>
        </Grid>

        

      </Grid>
      </Box>
  )
}
export default AboutUs;