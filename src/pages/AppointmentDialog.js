
// AppointmentDialog.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export default function AppointmentDialog() {
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    department: "",
    date: "",
    mode: "Online",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Trigger button */}
      {/* <Button
        variant="contained"
        sx={{ bgcolor: "#f57c00", "&:hover": { bgcolor: "#ef6c00" } }}
        onClick={() => setOpen(true)}
      >
        Book Appointment
      </Button> */}

      {/* Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ color: "#f57c00", fontWeight: "bold" }}>
          Book an Appointment
        </DialogTitle>
        <DialogContent dividers>
          <Typography sx={{ mb: 2 }}>
            Please fill out the form below to schedule your appointment.
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <TextField
            select
            fullWidth
            margin="normal"
            label="Select Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <MenuItem value="Cardiology">Cardiology</MenuItem>
            <MenuItem value="Diabetology">Diabetology</MenuItem>
            <MenuItem value="General">General</MenuItem>
          </TextField>
          <TextField
            fullWidth
            margin="normal"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />

          <Typography sx={{ mt: 2 }}>Mode</Typography>
          <RadioGroup
            row
            name="mode"
            value={formData.mode}
            onChange={handleChange}
          >
            <FormControlLabel value="Online" control={<Radio />} label="Online" />
            <FormControlLabel value="In-Person" control={<Radio />} label="In-Person" />
          </RadioGroup>
        </DialogContent>

        <DialogActions>
          <Button
            variant="outlined"
            sx={{ color: "#00695c", borderColor: "#00695c" }}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#f57c00", "&:hover": { bgcolor: "#ef6c00" } }}
            onClick={() => {
              console.log("Form submitted:", formData);
              setOpen(false);
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}