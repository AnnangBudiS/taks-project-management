import NewTasks from "./NewTasks";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-700 mb-4">Tasks</h2>
      <NewTasks onAdd={onAdd} />
      {tasks?.length === 0 && (
        <p className="text-slate-800 mb-4">
          This project does not have any task yet.
        </p>
      )}
      {tasks?.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-slate-100">
          {tasks?.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-slate-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
