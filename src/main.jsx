import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout'
import Home from './Pages/Home/Home'
import AllEvents from './Pages/AllEvent/AllEvents'
import Contact from './Pages/Contact/Contact'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/allevent',
        element: <AllEvents></AllEvents>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
