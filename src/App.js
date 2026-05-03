
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import PatientLogin from './pages/PatientLogin';
import DoctorLogin from './pages/DoctorLogin';
import AdminLogin from './pages/AdminLogin';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LabDiagnostics from './pages/LabDiagnostics';
import AppointmentDialog from './pages/AppointmentDialog';
import PatientDashboard from './pages/PatientDashboard';
import DoctorProfile from './pages/DoctorProfile';
import AdminDashboard from './pages/AdminDashboard';
function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )

}

function App() {
  const appRouter= createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/patientLogin",
          element:<PatientLogin />
        },
      {
        path:"/doctorLogin",
        element:<DoctorLogin />
      },
      {
        path:"/adminLogin",
        element:<AdminLogin />
      },
      {
        path:"/register",
        element:<Register />
      },
      {
        path:"/aboutUs",
        element:<AboutUs />
      },
      {
        path:"/contactUs",
        element:<ContactUs />
      },
      {
        path:"/labDiagnostics",
        element:<LabDiagnostics />
      },
      {
        path:"/appointmentDialog",
        element:<AppointmentDialog />
      },
      {
        path:"/patientDashboard",
        element:<PatientDashboard />
      },
      {
        path:"/doctorProfile/:id",
        element:<DoctorProfile />
      },
      {
        path:"/adminDashboard",
        element:<AdminDashboard />
      }
    ]
    //   element:(
    //     <>
    //      <Navbar />
    //       <Home />
    //     </>
    //   )
    // },
    //  {
    //   path: "/dashboard",
    //   element: (
    //     <>
    //       <Navbar />
    //       <Dashboard />
    //     </>
    //   )
    // },
    // {
    //   path:"/patientLogin",
    //   element:(
    //     <>
    //     <Navbar />
    //     <PatientLogin />
    //     </>
    //   )
     }

  ]
    
  )
  return (
    <div>
      
      <RouterProvider router={appRouter}></RouterProvider>

    </div>
   
  )
}

export default App;
