import express, { json }  from "express";
import productController from "./Product/ProductController.js";
import cors from "cors"
import ConnectDB from "./Connection.js";
import userController from "./User/UserController.js";

const app = express()
ConnectDB()

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    return res.status(200).send({message:"Success"})
})


app.get("/product",productController.getProduct)
app.get("/product/:id",productController.getProductById)
// app.get("/product/insertMany",productController.insertProduct)

app.post("/user",userController.InsertUSer)


app.listen(5000,()=>{
    console.log("Server Started");
})