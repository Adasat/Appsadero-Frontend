import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout'
import NotFound from '../Pages/NotFound/NotFound'
import Dashboard from '../Pages/Dashboard/Dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
        { path: '/dashboard', element: <Dashboard /> },
    ],
  },
])
