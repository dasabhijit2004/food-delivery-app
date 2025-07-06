import { connectionString } from "@/app/lib/db";
import { Resturant } from "@/app/lib/resturantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; 

export async function GET() {
  await mongoose.connect(connectionString);
  console.log("MongoDB connected");

  const data = await Resturant.find();
  console.log(data);

  return NextResponse.json({ result: data });
}

export async function POST(request) {
  try {
    await mongoose.connect(connectionString);
    console.log("MongoDB connected");

    const body = await request.json();
    console.log("Received body:", body);

    const { name, number, address, email, password } = body;

    if (!name || !number || !address || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const existingResturant = await Resturant.findOne({ email });
    if (existingResturant) {
      return NextResponse.json({ error: "Restaurant already registered with this email." }, { status: 400 });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const resturant = new Resturant({
      name,
      number,
      address,
      email,
      password: hashedPassword,
    });

    const savedResturant = await resturant.save();
    return NextResponse.json({ result: savedResturant }, { status: 201 });
  } catch (error) {
    console.error("POST /api/resturant failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
