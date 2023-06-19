import { createBrowserRouter, redirect } from 'react-router-dom'
import LayoutMain from '../Layout/LayoutMain/LayoutMain'
import NotFound from '../Pages/NotFound/NotFound'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import CreateAsadero from '../Pages/CreateAsadero/CreateAsadero'
import MyProfile from '../Pages/MyProfile/MyProfile'

import Abel from '../Pages/Pruebas/Abel'
import Friends from '../Pages/Friends/Friends'
import ManageAsadero from '../Pages/ManageAsadero/ManageAsadero'
/* import UpcomingAsadero from '../Pages/UpcomingAsadero/UpcomingAsadero'
 */import CategoriesNProducts from '../Components/CategoriesNProdcut/CategoriesNProducts'
import UpcomingBBQpage from '../Pages/UpcomingBBQpage/UpcomingBBQpage'
const checkLogin = () => {
  return localStorage.getItem('token') ? redirect('/home/dashboard') : null
}

const checkAuth = () => {
  return !localStorage.getItem('token') ? redirect('/login') : null
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    errorElement: <NotFound />,
    children: [
      { path: '/login', element: <Login />, loader: checkLogin },
      { path: '/signup', element: <Signup /> },
    ],
  },
  {
    path: '/home',
    element: <LayoutMain />,
    loader: checkAuth,
    errorElement: <NotFound />,
    children: [
      { path: '/home/dashboard', element: <Dashboard />, loader: checkAuth },
      { path: '/home/myProfile', element: <MyProfile /> },
      { path: '/home/createAsadero', element: <CreateAsadero /> },
      { path: '/home/manageAsadero', element: <ManageAsadero /> },
      { path: '/home/upcomingAsadero', element: <UpcomingBBQpage /> },
      { path: '/home/friends', element: <Friends /> },
      { path: '/home/abel', element: <Abel /> },
      {path: '/home/pedro', element: <CategoriesNProducts/>}
    ],
  },
])
