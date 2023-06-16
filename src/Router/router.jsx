import { createBrowserRouter } from 'react-router-dom'
//import LayoutWelcome from '../Layout/LayoutWelcome/LayoutWelcome'
import LayoutMain from '../Layout/LayoutMain/LayoutMain'
import NotFound from '../Pages/NotFound/NotFound'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import CreateAsadero from '../Pages/CreateAsadero/CreateAsadero'



import Abel from '../Pages/Pruebas/Abel'
/* import Pedro from '../Pages/Pruebas/Pedro'
 */import Diana from '../Pages/Pruebas/Diana'
import Friends from '../Pages/Friends/Friends'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    errorElement: <NotFound />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/myprofile', element: <Dashboard /> }, // MODIFICAR:
      { path: '/signup', element: <Signup /> },
      { path: '/login', element: <Login /> },
      { path: '/createAsadero', element: <CreateAsadero /> },
      { path: '/abel', element: <Abel /> },
      { path: '/pedro', element: <Friends /> },
      { path: '/diana', element: <Diana /> },
    ],
  },
])

