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
  } catch (e: unknown) {
    // Handle the unknown type here
    if (e instanceof Error) {
      console.error("Error fetching todos at server side", e.message);
    } else {
      console.error("Unexpected error fetching todos", e);
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
