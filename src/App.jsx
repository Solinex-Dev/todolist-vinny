import "./App.css";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const getButtonClasses = (filter) => {
    return `px-6 py-2 text-sm rounded shadow ${
      activeFilter === filter
        ? "bg-blue-500 text-white"
        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
    }`;
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const newTaskObject = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (id, currentText) => {
    setEditingTaskId(id);
    setEditedText(currentText);
  };

  const saveEdit = (id) => {
    if (!editedText.trim) return;
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editedText.trim() } : task
      )
    );
    setEditingTaskId(null);
    setEditedText("");
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "Completed") return task.completed;
    if (activeFilter === "Pending") return !task.completed;
    return true;
  });

  return (
    <>
      <div className="flex flex-row gap-5">
        <div className="flex items-center mt-10 flex-col bg-gray-800 p-16 rounded-lg shadow-lg w-[700px] m-auto text-white gap-5">
          <h1 className="font-sans font-semibold text-4xl">vinny-todolist</h1>
          <div className="flex flex-row gap-5 mt-5 mb-5 w-full">
            <input
              className="rounded-sm p-3 w-full"
              type="text"
              placeholder="Add new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="btn btn-white bg-white text-black w-24 h-12 rounded-sm hover:bg-gray-300"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>

          <div className="h-0.5 bg-white w-full m-5" />

          <div className="flex flex-row gap-5 justify-between w-full mt-5 mb-5 text-center">
            <div>
              <p>{tasks.length}</p>
              <p>Total Tasks</p>
            </div>
            <div>
              <p>{tasks.filter((t) => t.completed).length}</p>
              <p>Completed</p>
            </div>
            <div>
              <p>{tasks.filter((t) => !t.completed).length}</p>
              <p>Pending</p>
            </div>
          </div>

          <div className="h-0.5 bg-white w-full m-5" />

          <div className="flex flex-col gap-5 justify-start items-start w-full mt-5 mb-5 text-center">
            <p>Filter Tasks:</p>
            <div className="flex flex-row gap-5">
              {["All", "Pending", "Completed"].map((filter) => (
                <button
                  key={filter}
                  className={getButtonClasses(filter)}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={startEditing}
          editingTaskId={editingTaskId}
          editedText={editedText}
          setEditedText={setEditedText}
          saveEdit={saveEdit}
        />
      </div>
    </>
  );
}

export default App;
