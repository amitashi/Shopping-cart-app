import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'

const App = () => {
  return (
    <BrowserRouter>
      Shopping Cart
    <Routes>
      <Route path='/' element={<Home/>}/>

    </Routes>

    </BrowserRouter>
  )
}

export default App
