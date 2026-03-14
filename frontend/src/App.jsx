
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Menu from "./pages/Menu"

import { useEffect, useState } from "react"
import { getFoods } from "./api/foodApi"


function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const fetchFoods = async () => {
      const data = await getFoods()
      setFoods(data)
    }

    fetchFoods()
  }, [])

  return (
    <Menu foods={foods} />
  )
}

export default App