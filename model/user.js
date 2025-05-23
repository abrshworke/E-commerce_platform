// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     _id: {type: String , required : true},
//     name: {type: String , required : true},
//     email:{type: String , required : true},
//     imageUrl: {type: String , required : true , unique: true},
//     cartItem : {type: Object , default: {}}
// } , {minimize: false})

// const User = mongoose.models.user || mongoose.model('user' , userSchema);
// export default User;


// model/user.ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image_Url: { type: String, required: true, unique: true },
  cartItem: { type: Object, default: {} }
}, { minimize: false });

export default mongoose.models.User || mongoose.model("User", userSchema);
