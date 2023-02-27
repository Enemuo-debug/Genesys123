import express from "express";
import dotenv from "dotenv";
import rootrouter from "./routes/index.routes";
import mongoose from "mongoose";

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Data Base Linked');
        app.listen(3000, ()=>{
            console.log(`Server is now listeniong to port 3000`);            
        })
    })
    .catch((err) => {
        console.log(err);
    })

app.use('/', rootrouter)

app.use((req, res)=>{
    res.status(404).json({
        message: 'This link has been renamed or permaently to a new location',
    })
})