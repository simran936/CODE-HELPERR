import express from "express"
import Dbconnect from "./Configs/mongodb.js"
import cors from "cors"
import "dotenv/config"
import { clerWebhooks } from "./Controller/webhooks.js"
// initilaze express
const app=express()

app.use(cors())
//route
app.get("/",(req,res)=>{
    res.send("api working")

})

app.post("/clerk",express.json(),clerWebhooks)
Dbconnect()
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is stunning on port ${PORT}`)
})