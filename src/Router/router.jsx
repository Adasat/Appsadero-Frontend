import { createBrowserRouter } from 'react-router-dom'
//import LayoutWelcome from '../Layout/LayoutWelcome/LayoutWelcome'
import LayoutMain from '../Layout/LayoutMain/LayoutMain'
import NotFound from '../Pages/NotFound/NotFound'
import Dashboard from '../Pages/Dashboard/Dashboard'
<<<<<<< HEAD
import Login from '../Pages/Login/Login'
=======
import Signup from '../Pages/Signup/Signup'

>>>>>>> Adasat3

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain/>,
    errorElement: <NotFound />,
    children: [
        { path: '/dashboard', element: <Dashboard /> },
<<<<<<< HEAD
        { path: '/myprofile', element: <Dashboard /> }, // MODIFICAR:
=======
        { path: '/signup', element: <Signup/>}
>>>>>>> Adasat3
    ],
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <NotFound />
  }
])

