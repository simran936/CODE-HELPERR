import mongoose from "mongoose"

const Dbconnect=async()=>{
   const conn=await mongoose.connect("mongodb://localhost:27017/codeHelper")
   if(conn){
    console.log("db connected")
   }
}
export default Dbconnect;