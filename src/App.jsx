import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Nav from './components/Nav';
import Card from './components/card'
import Taq from './components/Taq';

function App() {
  
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <section>
        <Nav/> 
        <Home/> 
        <Card/>
        <Card flex="reverse"/>
        <Taq/>
      </section> 
    },
    {
      path: '/Login',
      element: <> <Nav/> <Login/> </>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
