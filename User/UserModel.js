import mongoose from "mongoose";

class UserModel{
    constructor(){
        this.schema = new mongoose.Schema({
            firstName:{type:String, require:true},
            lastName:{type:String,require:true},
            email:{type:String,require:true,unique:true},
            phone:{type:Number,require:true},
            password:{type:String,require:true},
            isAdmin:{type:Boolean,default:false}
        },{
            timestamps:true
        })
    }
}

const user = new UserModel()
const userModel = mongoose.model("tbl_users",user.schema)
export default userModel