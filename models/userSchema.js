import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName  : {
        type : String,
        required : true,
        unique : true,
        min : 3 ,
        max : 20
    },

     email : {
        type : String,
        required : true,
        unique : true,
        max : 50
    },

    password : {
        type : String,
        required : true,
        min : 6 ,
    },

    profilePicture : {
        type : String,
        default : ""
    },

    coverPicture : {
        type : String,
        default : ""
    },

    followers : {
        type : Array,
        default : []
    },

    folloings : {
        type : Array,
        default : []
    },
    
    isAdmin : {
        type : Boolean,
        default : false
    },

},
    {timestamps : true}
)

export default mongoose.model('user', userSchema)