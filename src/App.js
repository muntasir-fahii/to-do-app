import { useEffect } from "react";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //getting data from the server

    fetchingData();
  }, []);

  //fetching data

  const fetchingData = async () => {
    try {
      const res = await fetch(
        "https://delightful-pool-astronaut.glitch.me/tasks"
      );
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.log(error.messsage);
    }
  };

  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
};

export default App;
