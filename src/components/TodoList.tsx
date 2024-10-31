"use client";
import React from "react";

interface Todo {
  _id: string;
  title: string;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-1/3 flex flex-col items-center gap-3.5">
        {todos.map((todo) => (
          <div
            key={Math.random()}
            className="w-full h-14 px-3.5 flex justify-between items-center border border-zinc-500 bg-transparent transition-all outline-none focus:border-zinc-100"
          >
            <h2>{todo.title}</h2>
            <input type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
