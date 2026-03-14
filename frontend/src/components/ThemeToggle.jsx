import { useState } from "react"

function ThemeToggle() {

    // true = dark, false = light
  const [dark, setDark] = useState(true)

  const toggleTheme = () => {
    setDark(!dark)

    if (dark) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-700 text-white px-4 py-2 rounded"
    >
      Toggle Theme
    </button>
  )
}

export default ThemeToggle