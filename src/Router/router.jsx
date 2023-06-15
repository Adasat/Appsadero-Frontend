import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout/Layout'
import NotFound from '../Pages/NotFound/NotFound'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Login from '../Pages/Login/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <NotFound />,
    children: [
        { path: '/dashboard', element: <Dashboard /> },
    ],
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <NotFound />
  }
])

