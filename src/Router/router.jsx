import { createBrowserRouter, redirect } from 'react-router-dom'
import LayoutWelcome from '../Layout/LayoutWelcome/LayoutWelcome'
import LayoutMain from '../Layout/LayoutMain/LayoutMain'
import NotFound from '../Pages/NotFound/NotFound'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import CreateAsadero from '../Pages/CreateAsadero/CreateAsadero'


import Abel from '../Pages/Pruebas/Abel'
/* import Pedro from '../Pages/Pruebas/Pedro'
 */
import Diana from '../Pages/Pruebas/Diana'
import Friends from '../Pages/Friends/Friends'


const checkLogin = () => {
  localStorage.getItem('token') ? redirect('/login') : null
}

const checkAuth = () => {
  !localStorage.getItem('token') ? redirect('/login') : null
}


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWelcome />,
    errorElement: <NotFound />,
    children: [
      { path: '/login', element: <Login />},
      { path: '/signup', element: <Signup /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/myprofile', element: <Dashboard /> }, // MODIFICAR:
      
      { path: '/createAsadero', element: <CreateAsadero /> },
      { path: '/abel', element: <Abel /> },
      { path: '/friends', element: <Friends /> },
      { path: '/diana', element: <Diana /> },
    ],
  },
  
])

