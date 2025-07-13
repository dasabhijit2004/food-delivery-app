import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionString } from "@/app/lib/db";
import { Resturant } from "@/app/lib/resturantModel";

export async function POST(request) {
  try {
    await mongoose.connect(connectionString);
    console.log("✅ MongoDB connected");

    const { email } = await request.json();
    console.log("📥 Email received:", email);

    if (!email) {
      console.log("❌ Email missing");
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await Resturant.findOne({ email });
    if (!user) {
      console.log("❌ User not found for email:", email);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log("✅ User found:", user.name);

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
        address: user.address,
        number: user.number,
      },
    });
  } catch (error) {
    console.error("🔥 API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
