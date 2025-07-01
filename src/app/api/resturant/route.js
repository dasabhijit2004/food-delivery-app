import { connectionString } from "@/app/lib/db";
import { resturantSchema } from "@/app/lib/resturantModel";
import mongoose, { connect } from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {
    await mongoose.connect(connectionString);
    console.log("MongoDB connected");
    const data = await resturantSchema.find();
    console.log(data)

    return NextResponse.json({ result: data })
}