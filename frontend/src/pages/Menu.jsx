import { useState } from "react"
import ThemeToggle from "../components/ThemeToggle"

function Menu({ foods }) {

  const [dark, setDark] = useState(true)

  const toggleTheme = () => {
    setDark(!dark)

    if (dark) {
      document.documentElement.classList.remove("dark")
      console.log("light")
    } else {
      document.documentElement.classList.add("dark")
      console.log("dark")
    }
  }

  return (

  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-10 transition">

      {/* Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={toggleTheme}
          className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-4 py-2 rounded-lg"
        >
          Toggle Theme
        </button>
      </div>

      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        🍽 Restaurant Menu
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
        Created by Sonporworn Mahapiyanont
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
        Built with React, TailwindCSS, Node.js, Express.js, MongoDB Compass, and Vite for a seamless and modern web experience.
        and Docker for containerization and deployment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {foods.map((food) => (

          <div
            key={food._id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300 flex justify-between items-center"
          >

            {/* LEFT SIDE (text) */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {food.name}
              </h2>

              <p className="text-gray-500 dark:text-gray-400">
                Category: {food.category}
              </p>

              <p className="text-green-500 text-xl font-semibold mt-2">
                ${food.price.toFixed(2)}
              </p>
            </div>

            {/* RIGHT SIDE (image) */}
            <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Menu