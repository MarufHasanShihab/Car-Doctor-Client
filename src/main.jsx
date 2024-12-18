import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes'
import AuthProvider from './Provider/AuthProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <div  className="max-w-screen-xl  mx-auto">
    <RouterProvider router={router}/>
    <ToastContainer />
    </div>
    </AuthProvider>
  </StrictMode>,
)
