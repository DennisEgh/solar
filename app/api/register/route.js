import { NextResponse } from "next/server";
import { connectDB } from "../../../utils/database";
import User from "../../../models/userCredentials";
import bcrypt from "bcrypt";

export async function POST(res) {
  const { firstName, lastName, email, password } = await res.json();
  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    await connectDB();

    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User Registered.", status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An Error Occured", status: 500 });
  }
}
