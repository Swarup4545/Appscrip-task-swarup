import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Home';
import ProductListning from './component/ProductListning';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="Appscrip-task-swarup/" element={<ProductListning/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
