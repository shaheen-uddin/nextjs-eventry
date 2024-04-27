import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    min: 2,
    max: 100,
  },
  password: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: Number,
  },
  bio: {
    required: true,
    type: String,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", schema);
