import connect from "@/db/connect";
import Todo from "@/models/Todo.model";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    connect();
    const reqBody = await request.json();
    const { title } = reqBody;

    console.log("Requested body received: ", reqBody);

    const newTodo = new Todo({
      title,
    });

    const savedTodo = await newTodo.save();

    return NextResponse.json({
      message: "Todo created at server side",
      success: true,
      savedTodo,
    });
  } catch (e: any) {
    console.error("Error creating a todo at server side", e.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
