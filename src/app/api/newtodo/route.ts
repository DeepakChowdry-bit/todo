import connect from "@/db/connect";
import Todo from "@/models/Todo.model";
import { NextResponse } from "next/server";

// Define a type for the expected request body
interface CreateTodoRequestBody {
  title: string;
}

export async function POST(request: Request) {
  try {
    await connect(); // Ensure connection is awaited
    const reqBody: CreateTodoRequestBody = await request.json();
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
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("Error creating a todo at server side", e.message);
    } else {
      console.error("Unexpected error creating a todo", e);
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
