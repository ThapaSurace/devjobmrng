import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Register from './pages/Register'
import Login from './pages/Login'
import SingleJob from './pages/SingleJob'
import AddJob from './pages/AddJob'
import EditJob from './pages/EditJob'

const App = () => {

  return (
    <>
     <Navbar />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/job/:id' element={<SingleJob />} />
        <Route path='/addjob' element={<AddJob />} />
        <Route path='/editjob' element={<EditJob />} />
     </Routes>
    </>
  )
}

export default App