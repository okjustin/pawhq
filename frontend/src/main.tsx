import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { startMirage } from './lib/mirage'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './styles/styles.css'

startMirage()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
