import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import './App.css'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <RouterProvider router={routes}>
      <Toaster />
    </RouterProvider>
  )
}

export default App