import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,   
    required: true,
    unique: true
  },
  email: {  
    type: String,
    required: true,
    unique: true
    },
    password: {
    type: String,
    required: true
    },
    avatar: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/previews/048/926/072/non_2x/gold-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg"
    },
} , {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;