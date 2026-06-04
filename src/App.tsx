import { Outlet } from 'react-router-dom'
import './App.css'
import { Menu } from './components/Menu/Menu'
import CarsPage from './pages/CarsPage'

function App() {
  return (
    <>
    <Menu/>
    <Outlet/>
    </>
  )
}

export default App