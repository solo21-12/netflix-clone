import express, { json, urlencoded } from "express"
import cors from "cors"
import router from "./routes/modb.mjs"
const port = process.env.port || 4500 

const app = express()
app.use(json())
app.use(urlencoded({extended:false}))
app.use(cors())

app.use("/movies",router)
app.listen(port,()=>{
  console.log(`Server is up and running on port ${port}`);
})