
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
// import './App.css';
import Navbar from "./components/Navbar"
import PatientLogin from './pages/PatientLogin';
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
        }]
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
