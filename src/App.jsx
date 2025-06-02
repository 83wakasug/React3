import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contoller from './Component/Contoller'; 

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Contoller />
    </div>
  )
}

export default App;