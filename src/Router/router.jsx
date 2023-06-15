import { createBrowserRouter } from 'react-router-dom'

import NotFound from '../Pages/NotFound/NotFound'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Root from '../Layout/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <NotFound />,
    children: [
        { path: '/dashboard', element: <Dashboard /> },
    ],
  },
])
