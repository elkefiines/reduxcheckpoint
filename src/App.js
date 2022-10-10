import "./App.css";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <AddTask />
      <TaskList />
      <EditTask />
    </>
  );
}

export default App;
