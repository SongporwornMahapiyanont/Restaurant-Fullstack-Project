import express from "express"
import Food from "../models/Food.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const foods = await Food.find()
  res.json(foods)
})

router.post("/", async (req, res) => {
  const food = new Food(req.body)
  await food.save()
  res.json(food)
})

export default router