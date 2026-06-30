import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/testapp1");

const userSchema = new mongoose.Schema({
  image: String,
  email: String,
  name: String,
});

const User = mongoose.model("User", userSchema);

export default User;

