import { Schema, model, models } from "mongoose";

const UserSchemaCredentials = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First-name is required!"],
    },
    lastName: {
      type: String,
      required: [true, "Last-name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: [true, "Email already exists!"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

const User = models.user || model("UserCredentials", UserSchemaCredentials);

export default User;
