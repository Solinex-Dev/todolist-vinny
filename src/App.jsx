import "./App.css";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [activeFilter, setActiveFilter] = useState("All")

  const getButtonClasses = (filter) => {
    return `px-6 py-2 text-sm rounded shadow ${
      activeFilter === filter
        ? "bg-blue-500 text-white"
        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
    }`;
  };
  return (
    <div className="flex items-center mt-10 flex-col bg-gray-800 p-16 rounded-lg shadow-lg w-120 m-auto text-white gap-5">
      <h1 className="font-sans font-semibold text-4xl">vinny-todolist</h1>
      <div className="flex flex-row gap-5 mt-4">
        <input
          className="rounded-sm p-3 w-72"
          type="text"
          placeholder="Add new task"
        />
        <button className="btn btn-white bg-white text-black w-24 h-12 rounded-sm hover:bg-gray-300">
          Add Task
        </button>
      </div>
      <div className="flex flex-row gap-5 justify-between w-full mt-10 text-center">
        <div>
          <p>0</p>
          <p>Total Tasks</p>
        </div>
        <div>
          <p>0</p>
          <p>Completed</p>
        </div>
        <div>
          <p>0</p>
          <p>Pending</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-start items-start w-full mt-10 text-center">
        <p>Filter Tasks:</p>
        <div className="flex flex-row gap-5">
          <button className={getButtonClasses("All")} onClick={() => setActiveFilter("All")}>
            All
          </button>
          <button className={getButtonClasses("Pending")} onClick={() => setActiveFilter("Pending")}>
            Pending
          </button>
          <button className={getButtonClasses("Completed")} onClick={() => setActiveFilter("Completed")}>
            Completed
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center w-full mt-10 bg-white text-black p-10 rounded h-52 w-full">
          
      </div>
    </div>
  );
}

export default App;
