import {
  Box,
  Card, CardContent,
  Grid,
  Paper,
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow,
  Typography
} from "@mui/material";
import { useState } from "react";

export default function DoctorDashboard() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard"); // default open
   const [activePage, setActivePage] = useState("dashboard");

  // Example appointment data
  const appointments = [
    { id: 0, patient: "Avinash Kr", payment: "CASH", age: 31, datetime: "5 Oct 2024, 12:00 PM", fees: "$50", status: "✓" },
    { id: 1, patient: "GreatStack", payment: "CASH", age: 24, datetime: "26 Sep 2024, 11:00 AM", fees: "$40", status: "Cancelled" },
    { id: 2, patient: "GreatStack", payment: "CASH", age: 24, datetime: "25 Sep 2024, 02:00 PM", fees: "$40", status: "Completed" },
    { id: 3, patient: "GreatStack", payment: "CASH", age: 24, datetime: "23 Sep 2024, 11:00 AM", fees: "$40", status: "Completed" },
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
            { label: "Profile", key: "profile" },
          
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
     </Box>
     
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {activePage === "dashboard" && (
          <>
            

            {/* Summary Cards */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Card sx={{ bgcolor: "#e0f7fa" }}>
                  <CardContent>
                    <Typography variant="h6">$80 Earnings</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ bgcolor: "#ffe0b2" }}>
                  <CardContent>
                    <Typography variant="h6">4 Appointments</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ bgcolor: "#c8e6c9" }}>
                  <CardContent>
                    <Typography variant="h6">2 Patients</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Latest Bookings */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Latest Bookings
              </Typography>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography>Avinash Kr — 5 Oct 2024 (Cancelled)</Typography>
                </CardContent>
              </Card>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography>GreatStack — 26 Sep 2024 (Completed)</Typography>
                </CardContent>
              </Card>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography>GreatStack — 25 Sep 2024 (Completed)</Typography>
                </CardContent>
              </Card>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography>GreatStack — 23 Sep 2024 (Completed)</Typography>
                </CardContent>
              </Card>
            </Box>
          </>
        )}
        {/* </Box>
        
          <Box sx={{ flexGrow: 1, p: 3 }}> */}
        {activePage === "appointments" && (
          <>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
              All Appointments
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Patient</TableCell>
                    <TableCell>Payment</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Date & Time</TableCell>
                    <TableCell>Fees</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                 
                <TableBody>
                  {appointments.map((appt) => (
                    <TableRow key={appt.id}>
                      <TableCell>{appt.id}</TableCell>
                      <TableCell>{appt.patient}</TableCell>
                      <TableCell>{appt.payment}</TableCell>
                      <TableCell>{appt.age}</TableCell>
                      <TableCell>{appt.datetime}</TableCell>
                      <TableCell>{appt.fees}</TableCell>
                      <TableCell>
                        {appt.status === "✓" ? "✓" : appt.status}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
        </Box>



        {/* {selectedMenu === "appointments" && (
          <Typography variant="h6">Appointments Page (to be implemented)</Typography>
        )}

        {selectedMenu === "profile" && (
          <Typography variant="h6">Profile Page (to be implemented)</Typography>
        )} */}
      {/* </Box> */}
    </Box>
  );
}