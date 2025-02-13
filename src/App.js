import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import TopBar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'
import './app.css'


export default function App() {  

 let router = useRoutes(routes)
   
  return (
    <div>
      
      <TopBar />

      <div className="container">
            <SideBar />
            {router}
      </div>
     
     
    </div>
  )
}

