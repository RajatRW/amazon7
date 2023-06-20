import userModel from "./UserModel.js";
import bcrypt from "bcrypt"

class UserController{
    async InsertUSer(req,res){
        try {

            const password = bcrypt.hashSync(req.body.password,8)
            if(!password){
                return res.status(500).send({message:"Somthing want wrong"})
            }

            const result = await userModel.create({...req.body,password:password})
            if(result){
                return res.status(200).send({message:"success", user:result})
            }
            return res.status(500).send({message:"Somthing want wrong"})
        } catch (error) {
            if(error && error.code && error.code === 11000){
                return res.status(400).send({message:"Email is already Exist"})
            }
            return res.status(500).send({message:"Internal Server Error"})
        }
    }
}

const userController = new UserController()
export default userController;