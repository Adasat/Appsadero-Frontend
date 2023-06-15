import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout/Layout'
import NotFound from '../Pages/NotFound/NotFound'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Signup from '../Pages/Signup/Signup'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <NotFound />,
    children: [
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/signup', element: <Signup/>}
    ],
  },
])

