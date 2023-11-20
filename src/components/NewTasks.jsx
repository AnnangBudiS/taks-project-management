import { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [enterdTask, setEnteredTask] = useState("");

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enterdTask.trim() === "") {
      return;
    }
    onAdd(enterdTask);
    setEnteredTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enterdTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-slate-200"
      />
      <button
        onClick={handleClick}
        className="text-slate-700 hover:text-slate-900"
      >
        Add Task
      </button>
    </div>
  );
}
