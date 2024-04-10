import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout'
import Home from './Pages/Home/Home'
import AllEvents from './Pages/AllEvent/AllEvents'
import Contact from './Pages/Contact/Contact'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import AuthProvider from './Provider/AuthProvider'
import EventDetail from './Pages/EventDetail/EventDetail'
import Privateroute from './Privateroute/Privateroute'

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
        path:'/allevent/:id',
        element: <Privateroute> <EventDetail></EventDetail></Privateroute>,
        loader: ()=>fetch(`allevent.json`)
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
