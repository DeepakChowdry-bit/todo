"use client";
import React, { useState } from "react";

interface AddTodoProps {
  onAddTodo: (newTodo: { _id: string; title: string; isCompleter: boolean }) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState<{ title: string }>({ title: "" });

  const onSubmit = async () => {
    try {
      const res = await fetch("/api/newtodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      if (res.ok) {
        const newTodo = await res.json();
        console.log("Todo created successfully", newTodo);
        onAddTodo(newTodo); // Call the callback to update the parent state
        setTodo({ title: "" }); // Clear input after submission
      }
    } catch (e: any) {
      console.error("Error creating todo", e.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo({ title: value });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-1/3">
        <input
          name="title"
          type="text"
          placeholder="Name your todo"
          className="w-4/5 h-14 px-3.5 border border-zinc-500 bg-transparent transition-all outline-none focus:border-zinc-100"
          onChange={handleChange}
          value={todo.title}
        />
        <button
          className="w-1/5 h-14 bg-zinc-200 border-none text-zinc-600"
          onClick={onSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
