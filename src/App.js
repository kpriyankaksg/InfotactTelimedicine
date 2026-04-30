
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
