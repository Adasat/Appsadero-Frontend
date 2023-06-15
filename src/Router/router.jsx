import { createBrowserRouter } from 'react-router-dom'
//import LayoutWelcome from '../Layout/LayoutWelcome/LayoutWelcome'
import LayoutMain from '../Layout/LayoutMain/LayoutMain'
import NotFound from '../Pages/NotFound/NotFound'
import Dashboard from '../Pages/Dashboard/Dashboard'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain/>,
    errorElement: <NotFound />,
    children: [
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/myprofile', element: <Dashboard /> }, // MODIFICAR:
    ],
  },
])

