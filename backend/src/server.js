import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRoutes from "./routes/foodRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/foods", foodRoutes)

connectDB()

app.get("/", (req, res) => {
  res.send("Restaurant API Running 🚀")
})
app.post("/", async (req, res) => {
  const food = new Food({
    name: "Burger",
    price: 120,
    category: "Fast Food"
  })

  await food.save()
  res.json(food)
})
app.listen(5000, () => {
  console.log("Server running on port 5000")
})