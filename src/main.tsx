import { createRoot } from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router-dom'
import { routes } from './router/routes.tsx'

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes}/>
)
