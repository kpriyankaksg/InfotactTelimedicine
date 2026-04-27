
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
// import './App.css';
import Navbar from "./components/Navbar"
function App() {
  const appRouter= createBrowserRouter([
    {
      path:"/",
      element:(
        <>
         <Navbar />
          <Home />
        </>
      )
    },
     {
      path: "/dashboard",
      element: (
        <>
          <Navbar />
          <Dashboard />
        </>
      ),
    },

  ]
    
  )
  return (
    <div>
      
      <RouterProvider router={appRouter}></RouterProvider>

    </div>
   
  )
}

export default App;
