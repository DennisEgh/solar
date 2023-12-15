import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  email_verified: {
    type: Boolean,
    required: [true, "Email must be verified"],
  },
  name: {
    type: String,
    required: [true, "A Name is required"]
  },
  image: {
    type: String,
  },
},
{
  timestamps: true,
});

const User = models.User || model("User", UserSchema);

export default User;
