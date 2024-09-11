import { useState, useEffect } from "react";

function TablePage() {
  const [todos, setTodos] = useState([]);
  const [sortDirection, setSortDirection] = useState("▲");
  const [filter, setFilter] = useState("");
  const [filterCompleted, setFilterCompleted] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.todos));
  }, []);

  //   soring asc and desc
  const sortTodos = () => {
    const sorted = [...todos].sort((a, b) => {
      if (sortDirection === "▲") {
        return a.todo.localeCompare(b.todo);
      } else {
        return b.todo.localeCompare(a.todo);
      }
    });
    setTodos(sorted);
    setSortDirection(sortDirection === "▲" ? "▼" : "▲");
  };

  //   filter text
  // Filter todos based on text, completed status, and ID
  const filteredTodos = todos.filter((todo) => {
    const matchesTextFilter = todo.todo
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchesCompletedFilter =
      filterCompleted === "all"
        ? true
        : filterCompleted === "yes"
        ? todo.completed
        : !todo.completed;

    return matchesTextFilter && matchesCompletedFilter;
  });

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg border my-5">
      <h2 className="text-2xl font-bold text-center mb-6">List Todos</h2>
      <input
        type="text"
        placeholder="Search todos..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      <div className="text-center">
        {/* sorting title */}
        <button
          onClick={sortTodos}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Sort by Title <span className="ml-2">{sortDirection}</span>
        </button>

        {/* sorting complete todos */}
        <select
          value={filterCompleted}
          onChange={(e) => setFilterCompleted(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-3 mb-4"
        >
          <option value="all">All</option>
          <option value="yes">Completed</option>
          <option value="no">Not Completed</option>
        </select>
      </div>
      <table className="w-full table-auto bg-white rounded-lg border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Completed</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td className="border-t px-4 py-2">{todo.id}</td>
              <td className="border-t px-4 py-2">{todo.todo}</td>
              <td className="border-t px-4 py-2">
                {todo.completed ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;
