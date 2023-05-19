import React from 'react'
import MainBlogPage from './MainBlogPage'
import My from './My'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<My/>}/>
    <Route path='/task' element={<MainBlogPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
