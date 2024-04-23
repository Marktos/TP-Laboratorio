import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar-component/Navbar'
import Footer from './components/Footer-component/Footer'
import Principal from './components/Principal-component/Principal'
import Aside from './components/Aside-component/Aside'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
        <Navbar />
        <div className="container">
            <Aside />
            <Principal />
        </div>
        <Footer />
    </div>
  );
}

export default App
