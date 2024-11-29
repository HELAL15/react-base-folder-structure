
import { Route, Routes, useLocation } from 'react-router'
import './index.css'
import Home from './pages/Home'
import Layout from './layout/Layout'
import { useEffect } from 'react';

const App = ()=> {

  const location = useLocation();
  useEffect(()=>{
    window.scrollTo({top:0, left:0 , behavior:"instant"})
  },[location.key])
  

  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
