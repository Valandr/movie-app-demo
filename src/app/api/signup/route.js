import prisma from "../../../utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
      },
    });

    const { password, ...rest } = user;
    return NextResponse.json(rest);
  } catch (error) {
    return NextResponse.json(
      { error: "Registration failed", message: error.message },
      { status: 400 }
    );
  }
}
