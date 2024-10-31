import connect from "@/db/connect";
import Todo from "@/models/Todo.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();

    const allTodos = await Todo.find({});

    return NextResponse.json({
      message: "Todos fetched successfully",
      success: true,
      todos: allTodos,
    });
  } catch (e: any) {
    console.error("Error fetching todos at server side", e.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
