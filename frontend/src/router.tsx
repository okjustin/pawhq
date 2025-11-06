import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import DashboardLayout from './components/layout/DashboardLayout.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '/', element: <Dashboard /> }
    ]
  }
])