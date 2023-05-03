import { Schema, model } from "mongoose";

const userSchama = new Schema({
  Name: String,
  Email: String,
  Password: String,
});

const Auth = model("Auth", userSchama);
export default Auth;
