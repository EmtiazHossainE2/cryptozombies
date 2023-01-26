import React from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/Routes/Routes'

const App = () => {
  return (
    <main>
      <RouterProvider router={routes}></RouterProvider>
    </main>
  )
}

export default App