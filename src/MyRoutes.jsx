import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Carousel from './components/navbar/Carousel'
import Cards from './components/navbar/Cards'
import Tabs from './components/navbar/Tabs'
import Homepage from './pages/Homepage'
import Copy from './Copy'

const MyRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage/>}/>
           <Route path='/tabs' element={<Tabs/>}/>

          {/* <Route path='/' element={<NavBar/>}/> */}


          </Route>

          <Route path='copy' element={<Copy/>}/>

            
        </Routes>
    </Router>

    </>
  )
}

export default MyRoutes