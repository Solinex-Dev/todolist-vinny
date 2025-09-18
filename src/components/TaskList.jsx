const TaskList = ({
  tasks,
  editTask,
  toggleTask,
  deleteTask,
  editingTaskId,
  editedText,
  setEditedText,
  saveEdit,
}) => {
  return (
    <div className="flex flex-col gap-4 justify-start items-start w-[700px] mt-10 bg-gray-800 text-black p-10 rounded-lg shadow min-h-[700px] overflow-scroll max-h-[700px] task-list-scroll">
      {tasks.length === 0 ? (
        <p className="text-center w-full text-gray-500 italic">
          No tasks yet. Add one above.
        </p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center p-3 rounded w-full border bg-gray-100"
          >
            <div className="w-full mr-5">
              {editingTaskId === task.id ? (
                <input
                  className="w-full p-2 border border-gray-400 rounded"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  onBlur={() => saveEdit(task.id)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(task.id)}
                  autoFocus
                />
              ) : (
                <div
                  onClick={() => editTask(task.id, task.text)}
                  className={`cursor-pointer select-none ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.text}
                </div>
              )}
            </div>

            <div className="flex flex-row gap-3">
              <button
                onClick={() => toggleTask(task.id)}
                className={`text-sm p-1 rounded w-14 text-center ${
                  task.completed
                    ? "bg-yellow-400 hover:bg-yellow-300 text-black"
                    : "bg-green-500 hover:bg-green-400 text-white"
                }`}
              >
                {task.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="hover:bg-red-200 text-sm bg-red-500 p-1 rounded text-white w-14 text-center"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
