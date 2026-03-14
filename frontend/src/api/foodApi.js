import axios from "axios"

const API = "http://localhost:5000/api/foods"

// API functions for frontend to interact with backend
export const getFoods = async () => {
  const res = await axios.get(API)
  return res.data
}

export const createFood = async (food) => {
  const res = await axios.post(API, food)
  return res.data
}