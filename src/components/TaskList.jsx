const TaskList = ({ tasks, activeFilter, toggleTask, deleteTask }) => {
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "Completed") return task.completed;
    if (activeFilter === "Pending") return !task.compelted;
    return true;
  });

  return (
    <div className="flex flex-col gap-4 justify-start items-start w-full mt-10 bg-white text-black p-10 rounded shadow">
      {filteredTasks.length === 0 ? (
        <p className="text-center w-full text-gray-500 italic">
          No tasks in this filter.
        </p>
      ) : (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-between items-center p-3 rounded w-full border ${
              task.completed ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <div
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer select-none ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:underline text-sm"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;