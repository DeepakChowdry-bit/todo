"use client";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Todo {
  _id: string;
  title: string;
  isCompleter: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const res = await fetch("api/gettodos");
      if (res.ok) {
        const data = await res.json();
        if (data.todos && Array.isArray(data.todos)) {
          setTodos(data.todos); // Assuming your API returns { todos: [...] }
        } else {
          console.error("Unexpected response structure:", data);
        }
      }
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = (newTodo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]); // Update todos with the new todo
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <AddTodo onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
