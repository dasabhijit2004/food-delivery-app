import { connectionString } from "@/app/lib/db";
import { Resturant } from "@/app/lib/resturantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateJWT } from "@/app/lib/auth";

export async function POST(request) {
  try {
    await mongoose.connect(connectionString);
    console.log("MongoDB connected");

    const body = await request.json();
    console.log("Login body received:", body);

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await Resturant.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Restaurant not found with this email" },
        { status: 404 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    // Optionally generate a JWT here for session
    const token = generateJWT(user);

    return NextResponse.json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        number: user.number,
        address: user.address,
      },
      token: token
    });
  } catch (error) {
    console.error("POST /api/resturant/login failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
