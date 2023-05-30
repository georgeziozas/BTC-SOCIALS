import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { logo, title, standard, twitter, discord, telegram, userId } =
      await request.json();
    console.log("Request Body:", await request.json());

    // In a production setting you'd want to validate the incoming data here

    const result = {
      logo: logo,
      title: title,
      standard: standard,
      twitter: twitter,
      discord: discord,
      telegram: telegram,
      userId: userId,
    };

    console.log("result:" + result);
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    console.log("error" + error);
    const message = error instanceof Error ? error.message : "Unexpected Error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
