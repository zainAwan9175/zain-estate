import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const mongdbconnection=async ()=>{
    try{
        await mongoose.connect(process.env.URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log("connected to data base ")
    }
    catch(err)
    {
        console.log("database connection errore",err);
    }


}


export default mongdbconnection;