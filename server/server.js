import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://AliNaqiKhan:512@cluster1.zxjsa.mongodb.net/Data?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("Connection Successful");
}).catch((error)=>{
  console.log(error);
});

const hostname = "127.0.0.1";
const port = process.env.PORT || 5000;


app.use('/api/products',productRouter);
app.use('/api/users', userRouter);


app.get("/", (req, res) => {
  res.send("Server is ready");
});

// eslint-disable-next-line no-unused-vars
app.use((err,req,res,next) => {
  res.status(500).send({message:err.message});
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
