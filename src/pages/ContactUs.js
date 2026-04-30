import { Box,Typography } from "@mui/material";

const ContactUs=()=>{
  return(
    <Box sx={{bgcolor: "#E3FCF9", height: 'screen', px:20, py:5}}>
       {/* <Grid> */}
          <Typography variant="h3" color="primary" gutterBottom
          sx={{py:5}}
          >
           Get In Touch With Us Today
          </Typography>
          {/* <h1 sx={{color: 'blue'}}> We at Health Care are there for you ALWAYS and in ALL WAYS</h1> */}
          <Typography variant="body1" color="textSecondary">
           Get exceptional care along with personalised treatment for a healthier future at HEALTH CARE by scheduling an appointment.
          </Typography>
          <Typography variant="body1" color="primary" gutterBottom sx={{py:3}}>
            Email Id
          </Typography>
           <Typography variant="body1" color="textSecondary">
            info@healthcare.com
          </Typography>
           <Typography variant="body1" color="textSecondary">
            healthcare@gmail.com
          </Typography>
           <Typography variant="body1" color="primary" gutterBottom sx={{py:3}}>
            Phone Number
          </Typography>
           <Typography variant="body1" color="textSecondary">
            8909 090 909
          </Typography>
           <Typography variant="body1" color="textSecondary">
            8908 090 909
          </Typography>
          <Typography variant="body1" color="primary" gutterBottom sx={{py:4}}>
         
          </Typography>
          
        {/* </Grid> */}

    </Box>

  )
}
export default ContactUs;