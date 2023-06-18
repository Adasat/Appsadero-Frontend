import { createBrowserRouter, redirect } from 'react-router-dom'
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
  return localStorage.getItem('token') ?  redirect('/dashboard') : null
}

const checkAuth = () => {
  return !localStorage.getItem('token') ? redirect('/login') : null
}


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain/> ,
    errorElement: <NotFound />,
    children: [
      { path: '/login', element: <Login />, loader: checkLogin},
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

