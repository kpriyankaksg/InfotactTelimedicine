

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const summary = [
    { label: "Doctors", value: 15 },
    { label: "Appointments", value: 5 },
    { label: "Patients", value: 3 },
  ];
  
  const bookings = [
    {
      doctor: "Dr. Richard James",
      date: "26 Sep 2024",
      status: "Cancelled",
      statusColor: "red",
      img: "/images/doc1.jpg",
    },
    {
      doctor: "Dr. Christopher Davis",
      date: "23 Sep 2024",
      status: "Completed",
      statusColor: "green",
      img: "/images/doc2.jpg",
    },
    {
      doctor: "Dr. Richard James",
      date: "25 Sep 2024",
      status: "Completed",
      statusColor: "green",
      img: "/images/doc1.jpg",
    },
    {
      doctor: "Dr. Richard James",
      date: "23 Sep 2024",
      status: "Completed",
      statusColor: "green",
      img: "/images/doc1.jpg",
    },
    {
      doctor: "Dr. Emily Larson",
      date: "22 Sep 2024",
      status: "Completed",
      statusColor: "green",
      img: "/images/doc3.jpg",
    },
  ];
  const appointments = [
    {
      id: 1,
      patient: "Avinash K",
      age: 31,
      date: "5 Oct 2024",
      time: "12:00 PM",
      doctor: "Dr. Richard James",
      fees: "$50",
      status: "Pending",
    },
    {
      id: 2,
      patient: "GreatStack",
      age: 24,
      date: "26 Sep 2024",
      time: "11:00 AM",
      doctor: "Dr. Richard James",
      fees: "$40",
      status: "Cancelled",
    },
     {
      id: 3,
      patient: "GreatStack",
      age: 24,
      date: "23 Sep 2024",
      time: "01:00 PM",
      doctor: "Dr. Christopher Davis",
      fees: "$50",
      status: "Pending",
    },
    {
      id: 4,
      patient: "GreatStack",
      age: 24,
      date: "25 Sep 2024",
      time: "02:00 PM",
      doctor: "Dr. Richard James",
      fees: "$40",
      status: "Completed",
    },
    {
      id: 5,
      patient: "GreatStack",
      age: 24,
      date: "23 Sep 2024",
      time: "11:00 AM",
      doctor: "Dr. Richard James",
      fees: "$40",
      status: "Completed",
    },
  ]
  const doctors = [
    { name: "Dr. Richard James", specialty: "General physician", available: true },
    { name: "Dr. Emily Larson", specialty: "Gynecologist", available: true },
    { name: "Dr. Sarah Patel", specialty: "Dermatologist", available: true },
    { name: "Dr. Christopher Lee", specialty: "Pediatrician", available: true },
    { name: "Dr. Jennifer Garcia", specialty: "Neurologist", available: true },
    { name: "Dr. Andrew Williams", specialty: "Gastroenterologist", available: false },
    { name: "Dr. Christopher Davis", specialty: "General physician", available: false },
    { name: "Dr. Timothy White", specialty: "Gynecologist", available: false },
    { name: "Dr. Ava Mitcheli", specialty: "Dermatologist", available: false },
    { name: "Dr. Jeffrey King", specialty: "Pediatrician", available: false },
  ];



  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          bgcolor: "#E8E9EB",
          color: "black",
          p: 3,
        }}
      >
        <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
          Admin Panel
        </Typography>
        {/* Sidebar items */}
  {[
    { label: "Dashboard", key: "dashboard" },
    { label: "Appointments", key: "appointments" },
    { label: "Add Doctor", key: "addDoctor" },
    { label: "Doctors List", key: "allDoctorsList" },
  ].map((item) => (
    <Typography
      key={item.key}
      sx={{
        mb: 2,
        cursor: "pointer",
        p: 1,
        borderRadius: 1,
        bgcolor: activePage === item.key ? "#A9A9A9" : "transparent", // highlight active
        fontWeight: activePage === item.key ? "bold" : "normal",
      }}
      onClick={() => setActivePage(item.key)}
    >
      {item.label}
    </Typography>
  ))}

        {/* <Typography sx={{ mb: 2, cursor: "pointer" }} onClick={() => setActivePage("dashboard")}>
          Dashboard
        </Typography>
        <Typography sx={{ mb: 2, cursor: "pointer" }} onClick={() => setActivePage("appointments")}>
          Appointments
        </Typography>
        <Typography sx={{ mb: 2, cursor: "pointer" }} onClick={() => setActivePage("addDoctor")}>
          Add Doctor
        </Typography>
        <Typography sx={{ mb: 2, cursor: "pointer" }} onClick={() => setActivePage("allDoctorsList")}>
          Doctors List
        </Typography> */}
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4, bgcolor: "#f9f9f9" }}>
        {activePage === "dashboard" && (
          <>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {summary.map((item, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                    <CardContent>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        {item.value}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {item.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Latest Bookings
            </Typography>
             <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <List>
              {bookings.map((b, i) => (
                <ListItem key={i}>
                  <ListItemAvatar>
                    <Avatar src={b.img} alt={b.doctor} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={b.doctor}
                    secondary={`Booking on ${b.date}`}
                  />
                  <Typography
                    sx={{ fontWeight: "bold", color: b.statusColor }}
                  >
                    {b.status}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
          </>
        )}
        {/* all appointments */}
         {activePage === "appointments" && (
          <>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
              All Appointments
            </Typography>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Patient</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Date & Time</TableCell>
                      <TableCell>Doctor</TableCell>
                      <TableCell>Fees</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                   <TableBody>
                    {appointments.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell>{a.id}</TableCell>
                        <TableCell>{a.patient}</TableCell>
                        <TableCell>{a.age}</TableCell>
                        <TableCell>{`${a.date}, ${a.time}`}</TableCell>
                        <TableCell>{a.doctor}</TableCell>
                        <TableCell>{a.fees}</TableCell>
                        <TableCell>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              color:
                                a.status === "Completed"
                                  ? "green"
                                  : a.status === "Cancelled"
                                  ? "red"
                                  : "orange",
                            }}
                          >
                            {a.status}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
           </>
        )}

          {/* add doctor */}
        {activePage === "addDoctor" && (
          <>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
              Add Doctor
            </Typography>
            <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
              <TextField fullWidth label="Name" sx={{ mb: 2 }} />
              <TextField fullWidth label="Email" sx={{ mb: 2 }} />
              <TextField fullWidth label="Password" type="password" sx={{ mb: 2 }} />
              <TextField fullWidth label="Experience (Years)" sx={{ mb: 2 }} />
              <TextField fullWidth label="Fees" sx={{ mb: 2 }} />
              <TextField fullWidth label="About Doctor" multiline rows={3} sx={{ mb: 2 }} />
              <TextField fullWidth label="Speciality" sx={{ mb: 2 }} />
              <TextField fullWidth label="Degree" sx={{ mb: 2 }} />
              <TextField fullWidth label="Address" sx={{ mb: 2 }} />
              <Button variant="contained" sx={{ bgcolor: "#1976d2" }}>
                Submit
              </Button>
            </Card>
          </>
        )}

         {/* all doctors list */}
       

        {activePage === "allDoctorsList" && (
  <>
    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
      All Doctors
    </Typography>
    <Grid container spacing={3}>
      {doctors.map((doc, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: "center", p: 2 }}>
            <Avatar
              sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
              src={`/images/doc${i + 1}.jpg`} // mock images
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {doc.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                {doc.specialty}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: "bold",
                  color: doc.available ? "green" : "red",
                }}
              >
                {doc.available ? "Available" : "Unavailable"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </>
)}

      </Box>
    </Box>
  );
}