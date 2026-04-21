import { useState } from "react";
import toast from "react-hot-toast";
import {LineChart,Line, XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer} from "recharts";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex overflow-x-hidden">

      {/* MOBILE SIDEBAR*/}
      {sidebarOpen && (
        <div>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* MOBILE SIDEBAR */}
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 md:p-6 z-50 md:hidden">
            
            <button
              className="mb-4 text-gray-500 cursor-pointer"
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-8">TaskFlow</h2>

            <ul className="space-y-4 text-gray-600">
              <li onClick={() => { setActiveTab("dashboard"); setSidebarOpen(false); }}>
                Dashboard
              </li>
              <li onClick={() => { setActiveTab("tasks"); setSidebarOpen(false); }}>
                Tasks
              </li>
              <li onClick={() => { setActiveTab("progress"); setSidebarOpen(false); }}>
                Progress
              </li>
              <li onClick={() => { setActiveTab("settings"); setSidebarOpen(false); }}>
                Settings
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-lg p-4 md:p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">TaskFlow</h2>

        <ul className="space-y-4 text-gray-600">

          <li 
            onClick={() => setActiveTab("dashboard")}
            className={`cursor-pointer ${activeTab === "dashboard" ? "text-blue-600 font-semibold" : ""}`}
          >
            Dashboard
          </li>

          <li 
            onClick={() => setActiveTab("tasks")}
            className={`cursor-pointer ${activeTab === "tasks" ? "text-blue-600 font-semibold" : ""}`}
          >
            Tasks
          </li>

          <li 
            onClick={() => setActiveTab("progress")}
            className={`cursor-pointer ${activeTab === "progress" ? "text-blue-600 font-semibold" : ""}`}
          >
            Progress
          </li>

          <li 
            onClick={() => setActiveTab("settings")}
            className={`cursor-pointer ${activeTab === "settings" ? "text-blue-600 font-semibold" : ""}`}
          >
            Settings
          </li>

        </ul>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-4 md:p-6 flex flex-col min-h-screen w-full">

      {/* CONTENT */}
      <div className="flex-grow">
       
        {/* TOPBAR */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex justify-between items-center">
          <button
            className="md:hidden text-xl cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>

          {activeTab === "dashboard" && (
            <div>
          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">

            {/* Total Tasks */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Total Tasks</h3>
              <p className="text-2xl font-bold">{tasks.length}</p>
            </div>

            {/* Completed */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Completed</h3>
              <p className="text-2xl font-bold">
                {tasks.filter(t => t.completed).length}
              </p>
            </div>

            {/* Pending */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Pending</h3>
              <p className="text-2xl font-bold">
                {tasks.filter(t => !t.completed).length}
              </p>
            </div>

          </div>

          {/* TASK INPUT */}
          <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex gap-4">
            <input
              type="text"
              placeholder="Add a new task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-gray-100 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={addTask}
              className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition cursor-pointer"
            >
              Add
            </button>
          </div>

          {/* TASK LIST */}
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Your Tasks</h2>

            {tasks.length === 0 ? (
              <p className="text-gray-500">No tasks yet</p>
            ) : (
              <ul className="space-y-3">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-white border rounded-lg p-3 shadow-sm"
                  >
                    <span
                      onClick={() => toggleTask(index)}
                      className={`cursor-pointer ${
                        task.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {task.text}
                    </span>

                    <button
                      onClick={() => deleteTask(index)}
                      className="text-red-500 text-sm cursor-pointer"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          </div>
          )}


          {/* TABS FOR SIDEBAR */}
          {activeTab === "tasks" && (
          <div>
            {/* TASK INPUT */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex gap-4">
              <input
                type="text"
                placeholder="Add a new task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-gray-100 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                onClick={addTask}
                className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition cursor-pointer"
              >
                Add
              </button>
            </div>

            {/* TASK LIST */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Your Tasks</h2>

              {tasks.length === 0 ? (
                <p className="text-gray-500">No tasks yet</p>
              ) : (
                <ul className="space-y-3">
                  {tasks.map((task, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-white border rounded-lg p-3 shadow-sm"
                    >
                      <span
                        onClick={() => toggleTask(index)}
                        className={`cursor-pointer ${
                          task.completed ? "line-through text-gray-400" : ""
                        }`}
                      >
                        {task.text}
                      </span>

                      <button
                        onClick={() => deleteTask(index)}
                        className="text-red-500 text-sm cursor-pointer"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          )}

          {activeTab === "progress" && (
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Progress</h2>

              {/* DATA */}
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={[
                    { name: "Start", completed: 0 },
                    { name: "Now", completed: tasks.filter(t => t.completed).length },
                    { name: "Goal", completed: tasks.length },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="completed" stroke="#3b82f6" />
                </LineChart>
              </ResponsiveContainer>

            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm max-w-lg md:mx-auto md:mt-10">
              <h2 className="text-lg font-semibold mb-6">Settings</h2>

              <p className="text-gray-500 mb-6">
                Manage your data and reset your progress if needed.
              </p>

              <button
                onClick={() => {
                  const confirmDelete = window.confirm(
                    "Are you sure you want to delete all tasks?"
                  );

                  if (confirmDelete) {
                    setTasks([]);
                    toast.success("All tasks deleted successfully!");
                  }
                }}
                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
              >
                Clear All Tasks
              </button>
            </div>
          )}
      </div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-400 text-sm mt-10">
          © {new Date().getFullYear()} M.Khan. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;