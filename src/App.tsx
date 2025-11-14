import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgotPassword from './components/Pages/Login/ForgotPassword'
import Login from './components/Pages/Login/Login'
import Dashboard from './components/Pages/Dashboard'
import ProductDetails from './components/Pages/ProductDetails'
import Inventory from './components/Pages/Inventory'
import ScanPage from './components/Pages/Scan/ScanPage'

import './App.css'
import NewPassword from './components/Pages/Login/NewPassword'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/scan" element={<ScanPage />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
