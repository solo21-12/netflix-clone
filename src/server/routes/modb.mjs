import express from "express"
import instance from "../instance/axios.mjs"
const router = express.Router()

router.get("/",(req,res,next)=>{
  res.json({
    "test":"router"
  })
})

export default router